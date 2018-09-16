export const GET_PHONES = 'GET_PHONES';
export const ADD_NEW_PHONE = 'ADD_NEW_PHONE';
export const CHECK_PHONE_INFO = 'CHECK_PHONE_INFO';
export const CHECK_TOTAL_GOODS = 'CHECK_TOTAL_GOODS';
export const CHECK_ADDED_PHONES = 'CHECK_ADDED_PHONES';
export const DELETE_GOOD = 'DELETE_GOOD';

export function getPhones() {
    return fetch('http://localhost:3000/api/phones')
        .then(response => response.json())
        .then(phones => ({
            type: GET_PHONES,
            phones
        }));
}

export function addNewPhone(phone) {
    return {
        type: ADD_NEW_PHONE,
        phone
    };
}

export function checkPhoneInfo(phone) {
    return {
        type: CHECK_PHONE_INFO,
        phone
    };
}

export function addPhoneToCart(phone) {
    return {
        type: CHECK_ADDED_PHONES,
        phone
    };
}

export function deleteGood(phone) {
    return {
        type: DELETE_GOOD,
        phone
    };
}
