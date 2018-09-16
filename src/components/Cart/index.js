import React from 'react';

import PhoneFilterContainer from '../../containers/PhoneFilterContainer';
import CartItem from '../CartItem';
import './style.css';

export default function Cart(props) {
    const { filter, addedPhones, deleteGood, toggleModal } = props;
    const filtredSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);

    return (
        <div className="cart clearfix">
            <div className="h1">
                Cart
            </div>

            <div className="items-container clearfix">
                <aside className="filter-sidebar">
                    <PhoneFilterContainer/>
                </aside>

                <div className="items">
                    {(filter === 'ALL')
                        ? addedPhones.map(phone => <CartItem key={phone.id}
                                                             phone={phone}
                                                             deleteGood={deleteGood}/>)
                        : addedPhones.filter(filtredPhone => filtredPhone.name === filter || filtredPhone.name.indexOf(filtredSearch) !== -1)
                            .map(phone => <CartItem key={phone.id}
                                                    phone={phone}
                                                    deleteGood={deleteGood}/>)}

                    {(addedPhones.length === 0)
                        ? null
                        : <div className="cart-buttons">
                            <a href="" className="buy-items" onClick={(e) => {
                                e.preventDefault();
                                toggleModal();
                            }}>Buy</a>
                        </div>}
                </div>
            </div>
        </div>
    );
}
