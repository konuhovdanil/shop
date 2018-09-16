import React, { Component } from 'react';

import './style.css';
import * as images from "../../images";

export default class CartItem extends Component {
    render() {
        const { phone, deleteGood } = this.props;

        return (
            <div className="cartitem clearfix">
                <div className="phone-image">
                    <img src={images.default[phone.image]} alt={phone.name}/>
                </div>

                <div className="phone-name">
                    {phone.name}
                </div>

                <div className="phone-price">
                    {phone.price}$
                </div>

                <div className="phone-count">
                    count: {phone.count}
                </div>

                <div className="remove-item">
                    <a href="" className="remove-link" onClick={(e) => {
                        e.preventDefault();
                        deleteGood(phone)
                    }}>-</a>
                </div>
            </div>
        );
    }
}
