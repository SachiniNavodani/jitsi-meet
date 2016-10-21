/* global APP */

import UIUtil from '../util/UIUtil';

/**
 * Show dialog which asks for required conference password.
 * @returns {Promise<string>} password or nothing if user canceled
 */
export default class RequirePasswordDialog {
    constructor() {
        this.titleKey = 'dialog.passwordRequired';
        this.labelKey = 'dialog.passwordLabel';
        this.errorKey = 'dialog.incorrectPassword';
        this.errorId = 'passwordRequiredError';
        this.inputId = 'passwordRequiredInput';
        this.inputErrorClass = 'error';
        this.isOpened = false;
    }

    /**
     * Registering dialog listeners
     * @private
     */
    _registerListeners() {
        let el = document.getElementById(this.inputId);
        el.addEventListener('keypress', this._hideError.bind(this));
    }

    /**
     * Helper method returning dialog body
     * @returns {string}
     * @private
     */
    _getBodyMessage() {
        return (
            `<div class="input-control">
                <label class="input-control__label"
                       data-i18n="${this.labelKey}"></label>
                <input class="input-control__input" name="lockKey" type="text"
                   data-i18n="[placeholder]dialog.password"
                   autofocus id="${this.inputId}">
                <p class="input-control__hint input-control__hint_error hide"
                   id="${this.errorId}"
                   data-i18n="${this.errorKey}"></p>
            </div>`
        );
    }

    /**
     * Asking for a password
     * @returns {Promise}
     */
    askForPassword() {
        if (!this.isOpened) {
            return this.open();
        }

        return new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            this._showError();
        });
    }

    /**
     * Opens the dialog
     * @returns {Promise}
     */
    open() {
        let { titleKey } = this;
        let msgString = this._getBodyMessage();

        return new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            let submitFunction = this._submitFunction.bind(this);
            let closeFunction = this._closeFunction.bind(this);

            APP.UI.messageHandler.openTwoButtonDialog({
                titleKey,
                msgString,
                leftButtonKey: "dialog.Ok",
                submitFunction,
                closeFunction,
                focus: ':input:first'
            });

            this._registerListeners();
            this.isOpened = true;
        });
    }

    /**
     * Submit dialog callback
     * @param e - event
     * @param v - value
     * @param m - message
     * @param f - form
     * @private
     */
    _submitFunction(e, v, m, f) {
        e.preventDefault();

        if (v && f.lockKey) {
            this.resolve(UIUtil.escapeHtml(f.lockKey));
        } else {
            this.reject(APP.UI.messageHandler.CANCEL);
        }
    }

    /**
     * Close dialog callback
     * @private
     */
    _closeFunction() {
        this._hideError();
        this.close();
    }

    /**
     * Method showing error hint
     * @private
     */
    _showError() {
        let className = this.inputErrorClass;
        document.getElementById(this.errorId).classList.remove('hide');
        document.getElementById(this.inputId).classList.add(className);
    }

    /**
     * Method hiding error hint
     * @private
     */
    _hideError() {
        let className = this.inputErrorClass;
        document.getElementById(this.errorId).classList.add('hide');
        document.getElementById(this.inputId).classList.remove(className);
    }

    /**
     * Close the dialog
     */
    close() {
        APP.UI.messageHandler.closeDialog();
        this.isOpened = false;
    }
}