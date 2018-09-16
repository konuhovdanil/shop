import { combineReducers } from 'redux';

import phones from './phone';
import checkPhoneInfo from './checkPhoneInfo';
import addedPhones from './addedPhones';
import totalGoods from './totalGoods';
import filter from './filter';
import isModalOpen from './isModalOpen';

const reducer = combineReducers({
    phones,
    checkPhoneInfo,
    filter,
    addedPhones,
    totalGoods,
    isModalOpen
});

export default reducer;