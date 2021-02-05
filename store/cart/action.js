export const actionTypes = {
    GET_CART: 'GET_CART',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_ERROR: 'GET_CART_ERROR',

    PAYMENT_VALUE: 'PAYMENT_VALUE',
    PAYMENT_VALUE_SUCCESS: 'PAYMENT_VALUE_SUCCESS',
    GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
    GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',

    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',

    CLEAR_CART: 'CLEAR_CART',
    CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
    CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',

    INCREASE_QTY: 'INCREASE_QTY',
    INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
    INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
    INCREASE_ONGKIRNB: 'INCREASE_ONGKIRNB',
    INCREASE_PAYMETHOD: 'INCREASE_PAYMETHOD',
    DECREASE_PAYMETHOD: 'DECREASE_PAYMETHOD',


    DECREASE_ONGKIRNB: 'DECREASE_ONGKIRNB',
    DECREASE_QTY: 'DECREASE_QTY',
    UPDATE_CART: 'UPDATE_CART',

    UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
    UPDATE_CART_ERROR: 'UPDATE_CART_ERROR',

    ADD_ADDRESS_VALUE: 'ADD_ADDRESS_VALUE',
    ADD_ADDRESS_VALUE_SUCCESS: 'ADD_ADDRESS_VALUE_SUCCESS',
    // UPDATE_PAYMENT_CODE: 'UPDATE_PAYMENT_CODE'
    // UPDATE_PAYMENT_CODE_SUCCESS: 'UPDATE_PAYMENT_CODE_SUCCESS'

    UPDATE_CLEAR: 'UPDATE_CLEAR',
    UPDATE_CLEAR_SUCCESS: 'UPDATE_CLEAR_SUCCESS',

    GET_CART_KURIR: 'GET_CART_KURIR',
    GET_CART_KURIR_SUCCESS: 'GET_CART_KURIR_SUCCESS',

    
    GET_TARIF_KURIR: 'GET_TARIF_KURIR',
    GET_TARIF_KURIR_SUCCESS: 'GET_TARIF_KURIR_SUCCESS',
};

export function getCart() {
    return { type: actionTypes.GET_CART };
}

export function getCartSuccess(data) {
    return {
        type: actionTypes.GET_CART_SUCCESS,
        data,
    };
}

export function getCartKurir(data) {
    return {
        type: actionTypes.GET_CART_KURIR,
        data,
    };
}

export function getCartKurirSuccess(data) {
    return {
        type: actionTypes.GET_CART_KURIR_SUCCESS,
        data,
    };
}

export function getCartError(error) {
    return {
        type: actionTypes.GET_CART_ERROR,
        error,
    };
}

export function addItem(product) {
    // console.log(product);
    
    return { type: actionTypes.ADD_ITEM, product };
}

export function removeItem(product) {
    return { type: actionTypes.REMOVE_ITEM, product };
}

export function increaseItemQty(product) {
    
    return { type: actionTypes.INCREASE_QTY, product };
}

export function increaseOngkirnb(product) {
    // console.log(product);
    return { type: actionTypes.INCREASE_ONGKIRNB, product };
}
export function decreaseOngkirnb(product) {
    // console.log(product);
    return { type: actionTypes.DECREASE_ONGKIRNB, product };
}

export function increasePayMethod(product) {
    // console.log(product);
    return { type: actionTypes.INCREASE_PAYMETHOD, product };
}

export function decreasePayMethod(product) {
    // console.log(product);
    return { type: actionTypes.DECREASE_PAYMETHOD, product };
}

export function decreaseItemQty(product) {
    return { type: actionTypes.DECREASE_QTY, product };
}

export function updateCartSuccess(payload) {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        payload,
    };
}

export function updateCartError(payload) {
    return {
        type: actionTypes.UPDATE_CART_ERROR,
        payload,
    };
}

export function paymentValue(data) {
// console.log(data);
    return {
        type: actionTypes.PAYMENT_VALUE,
        data,
    };
}

export function paymentValueSuccess(data) {

    return {
        type: actionTypes.PAYMENT_VALUE_SUCCESS,
        data,
    };
}

export function addAddressForm(data) {
    return {
        type: actionTypes.ADD_ADDRESS_VALUE,
        data,
    };
}

export function addAddressFormSuccess(data) {
    return {
        type: actionTypes.ADD_ADDRESS_VALUE_SUCCESS,
        data,
    };
}

export function getClear() {
    // console.log(data);
    return { type: actionTypes.UPDATE_CLEAR, 
                
    };
}
export function getClearSuccess(data) {
    // console.log(data);
    return { type: actionTypes.UPDATE_CLEAR_SUCCESS, 
                data
    };
}
export function getCheckTarif(data) {
    return {
        type: actionTypes.GET_TARIF_KURIR,
        data,
    };
}
export function getCheckTarifSuccess(data) {
    return {
        type: actionTypes.GET_TARIF_KURIR_SUCCESS,
        data,
    };
}
