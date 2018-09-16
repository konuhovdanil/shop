import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as images from '../../images/index';
import './style.css';

export default class PhoneInfo extends Component {

    render() {
        const { phone } = this.props.phone;

        return (
            <div className="phoneinfo">
                <div className="top-info clearfix">
                    <div className="phone-image">
                        <img src={images.default[phone.image]} alt={phone.name}/>
                    </div>

                    <div className="right-phone-info">
                        <div className="phone-name">
                            {phone.name}
                        </div>

                        <div className="phone-price">
                            {phone.price}$
                        </div>

                        <a href="" className="add-to-cart" onClick={(e) => {
                            e.preventDefault();
                            this.props.addPhone(phone);
                        }}>
                            Add to cart
                        </a>

                        <Link to={'/'} className="back">
                            Back
                        </Link>
                    </div>
                </div>

                <div className="characteristics">
                    <div className="h4">
                        Характеристики
                    </div>

                    <ul className="characteristics-list">
                        <li>
                        <span>
                            Год релиза:
                        </span>

                            <span>
                            2016
                        </span>
                        </li>
                        <li>
                        <span>
                            Цвет:
                        </span>

                            <span>
                            серебристый
                        </span>
                        </li>
                        <li>
                        <span>
                            Поддержка сетей 4G (LTE):
                        </span>

                            <span>
                            есть
                        </span>
                        </li>
                        <li>
                        <span>
                            Количество SIM-карт:
                        </span>

                            <span>
                            2 SIM
                        </span>
                        </li>
                        <li>
                        <span>
                            Диагональ:
                        </span>

                            <span>
                            5.5"
                        </span>
                        </li>
                        <li>
                        <span>
                            Операционная система:
                        </span>

                            <span>
                            Android
                        </span>
                        </li>
                        <li>
                        <span>
                            Количество ядер:
                        </span>

                            <span>
                            8
                        </span>
                        </li>
                        <li>
                        <span>
                            Объем оперативной памяти:
                        </span>

                            <span>
                            3 ГБ
                        </span>
                        </li>
                        <li>
                        <span>
                            Объем встроенной памяти:
                        </span>

                            <span>
                            32 ГБ
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}