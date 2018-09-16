import React from 'react';

import PhoneFilterContainer from '../../containers/PhoneFilterContainer';
import PhonesListContainer from '../../containers/PhonesListContainer';
import './style.css';

export default function Main() {
    return (
        <main className="main clearfix">
            <PhoneFilterContainer/>

            <PhonesListContainer/>
        </main>
    );
}
