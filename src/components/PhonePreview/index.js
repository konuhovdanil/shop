import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as images from '../../images/index';
import './style.css';

export default class PhonePreview extends Component {
    render() {
        const { phone, checkPhoneInfo, addPhone, admin } = this.props;

        console.log(images.default[phone.image]);
        return (
            <div className="phonepreview">
                <div className="preview">
                    <img src={images.default[phone.image]} alt={phone.name}/>
                </div>

                <div className="name">
                    {phone.name}
                </div>

                <div className="bottom-info clearfix">
                    <div className="price">
                        {phone.price} $
                    </div>

                    <div className="phone-links">
                        {(admin === false) ?
                            <a href="" className="add-to-cart" onClick={(e) => {
                                e.preventDefault();
                                addPhone(phone);
                            }}>Add</a>
                            :
                            <a href="" className="remove-item" onClick={(e) => {
                                e.preventDefault();
                            }}>-</a>
                        }

                        <Link to={`/phone:${phone.id}`} className="more-info" onClick={() => checkPhoneInfo(phone)}>
                            More
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
