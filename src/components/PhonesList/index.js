import React from 'react';

import PhonePreview from '../PhonePreview';
import './style.css';

export default function PhonesList(props) {
    const { phones, filter, checkPhoneInfo, addPhone } = props;
    const filtredSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);

    return (
        <div className="phoneslist">
            {(filter === 'ALL')
                ? phones.map(phone => <PhonePreview phone={phone}
                                                    addPhone={addPhone}
                                                    key={phone.id}
                                                    id={phone.id}
                                                    admin={false}
                                                    checkPhoneInfo={checkPhoneInfo}/>)
                : phones.filter(filtredPhone => filtredPhone.name === filter || filtredPhone.name.indexOf(filtredSearch) !== -1)
                    .map(phone => <PhonePreview phone={phone}
                                                addPhone={addPhone}
                                                key={phone.id}
                                                id={phone.id}
                                                admin={false}
                                                checkPhoneInfo={checkPhoneInfo}/>)            }
        </div>
    );
}
