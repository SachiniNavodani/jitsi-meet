import React from 'react';
import { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <div>
                <br/>
                <div className = 'priceing-table-main'>
                    <div className = 'price-grid'>
                        <div className = 'price-block agile'>
                            <div className = 'price-gd-top pric-clr1'>
                                <h4>Basic</h4>
                                <h3>$5</h3>
                                <h5>1 month</h5>
                            </div>
                            <div className = 'price-gd-bottom'>
                                <div className = 'price-list'>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Documentation</li>
                                        <li>Customers Support</li>
                                        <li>Free Updates</li>
                                        <li>Unlimited Domains</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'price-selet pric-sclr1'>
                                <a
                                    className = 'popup-with-zoom-anim'
                                    href = '#small-dialog'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className = 'price-grid'>
                        <div className = 'price-block agile'>
                            <div className = 'price-gd-top pric-clr2'>
                                <h4>Standard</h4>
                                <h3>$10</h3>
                                <h5>5 months</h5>
                            </div>
                            <div className = 'price-gd-bottom'>
                                <div className = 'price-list'>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Documentation</li>
                                        <li>Customers Support</li>
                                        <li>Free Updates</li>
                                        <li>Unlimited Domains</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'price-selet pric-sclr2'>
                                <a
                                    className = 'popup-with-zoom-anim'
                                    href = '#small-dialog'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className = 'price-grid wthree'>
                        <div className = 'price-block agile'>
                            <div className = 'price-gd-top pric-clr3'>
                                <h4>Premium</h4>
                                <h3>$20</h3>
                                <h5>Free for 2 months</h5>
                            </div>
                            <div className = 'price-gd-bottom'>
                                <div className = 'price-list'>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Documentation</li>
                                        <li>Customers Support</li>
                                        <li>Free Updates</li>
                                        <li>Unlimited Domains</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'price-selet pric-sclr3'>
                                <a
                                    className = 'popup-with-zoom-anim'
                                    href = '#small-dialog'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Pricing;
