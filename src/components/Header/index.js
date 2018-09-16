import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header(props) {
    const { addedPhones } = props;
    let  count = 0;

    for (let i = 0; i < addedPhones.length; i++) {
        count += addedPhones[i].count;
    }

    return (
        <header className="header clearfix">
            <Link to={'/'} className="h1">
                Phone Storage
            </Link>

            <div className="personal">
                {/*<Link to={'/admin'} className="accaunt-link">
                    Admin
                </Link>*/}
                <Link to={'/cart'} className="cart-link">
                    Cart
                    <span>{count}</span>
                </Link>
            </div>
        </header>
    );

}