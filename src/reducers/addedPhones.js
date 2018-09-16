import { CHECK_ADDED_PHONES, DELETE_GOOD } from '../actions';

export default function reducer(state = [], action) {
    switch (action.type) {
        case CHECK_ADDED_PHONES:
            if (state.length === 0) {
                action.phone.count = 1
                return [
                    ...state,
                    action.phone
                ];
            } else {
                if (state.find(addedPhone => addedPhone.id === action.phone.id)) {
                    action.phone.count = state.find(addedPhone => addedPhone.id === action.phone.id && addedPhone.count++).count;
                    let newState = state.filter(phone => phone.id !== action.phone.id);
                    return [
                        ...newState,
                        action.phone
                    ];
                } else {
                    action.phone.count = 1
                    return [
                        ...state,
                        action.phone
                    ];
                }
            }
        case DELETE_GOOD:
            if (state.find(addedPhone => addedPhone.id === action.phone.id && addedPhone.count > 1)) {
                action.phone.count = state.find(addedPhone => addedPhone.id === action.phone.id && addedPhone.count--).count;
                let newState = state.filter(phone => phone.id !== action.phone.id);

                return [
                    ...newState,
                    action.phone
                ].sort((a, b) => {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 1;
                });

            } else {
                let newState = state.filter(phone => phone.id !== action.phone.id);

                return newState;
            }
        default:
            return state;
    }
}