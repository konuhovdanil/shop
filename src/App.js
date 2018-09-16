import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer/index';
import Main from './components/Main';
import AdminContainer from './containers/AdminContainer';
import PhoneInfoContainer from './containers/PhoneInfoContainer';
import CartContainer from './containers/CartContainer';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>

                <div className="main-content">
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/cart'} component={CartContainer}/>
                    <Route path={'/phone:id'}
                           component={PhoneInfoContainer}/>
                    <Route path={'/admin'} component={AdminContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
