import { CHECK_TOTAL_GOODS } from '../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case CHECK_TOTAL_GOODS:

            return Object.assign({}, state, { totalGoods: action.totalGoods });

        default:
            return state;
    }
}