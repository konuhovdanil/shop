import { TOGGLE_MODAL } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return !state;

        default:
            return state;
    }
}

export default reducer;