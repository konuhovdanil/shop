import { CHECK_PHONE_INFO } from '../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHECK_PHONE_INFO:
            return Object.assign({}, state, { phone: action.phone });

        default:
            return state;
    }
}