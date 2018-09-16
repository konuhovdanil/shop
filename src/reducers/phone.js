import { GET_PHONES, ADD_NEW_PHONE } from "../actions";


export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_PHONES:
            return action.phones
        case ADD_NEW_PHONE:
            return [
                ...state,
                action.phone
            ]
        default:
            return state;
    }
}