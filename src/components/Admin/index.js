import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import AddPhoneForm from '../AddPhoneForm';
import ModalContainer from '../../containers/ModalContainer';
import PhonePreview from '../PhonePreview';
import './style.css';
import ReactDOM from "react-dom";

export default function Admin(props) {
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    const { phones, toggleModal, addNewPhone, checkPhoneInfo } = props;

    return (
        <div className="admin">
            <div className="h1">
                Admin - panel
            </div>
            <div className="add-item-container">
                <div className="h4">
                    Add item
                    <a href="" className="add-item" onClick={(e) => {
                        e.preventDefault();
                        toggleModal();
                    }}>+</a>
                </div>

                <Slider {...sliderSettings}>
                    {phones.map(phone => <PhonePreview phone={phone}
                                                       key={phone.id}
                                                       admin={true}
                                                       id={phone.id}
                                                       checkPhoneInfo={checkPhoneInfo}/>)}
                </Slider>
            </div>

            {ReactDOM.createPortal(
                <ModalContainer>
                    <AddPhoneForm addNewPhone={addNewPhone} phones={phones}/>
                </ModalContainer>,
                document.getElementById('modals'))}
        </div>
    );
}
