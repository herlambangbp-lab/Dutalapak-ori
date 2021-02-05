import { actionTypes } from './action';

export const initCart = {
    cartItems: [],
    amount: 0,
    cartTotal: 0,
    paymentMetod: null,
    paymentChoice: null,
    totalTransaksi: 0,
    setAddressForm: null,
    data: null,
    dataCheckTarif:null,
};

function reducer(state = initCart, action) {
    // console.log(action.data);
    // console.log(action.payload);
    switch (action.type) {
        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
                ...{ paymentMetod: action.data },
                // ...{ totalTransaksi: 0},
                // ...{ paymentChoice: null},
                // ...{ setAddressForm: null},
            };
        case actionTypes.UPDATE_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
                ...{ totalTransaksi: action.payload.totalTransaksi },
            };
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };

        case actionTypes.ADD_ADDRESS_VALUE_SUCCESS:
            return {
                ...state,
                ...{ setAddressForm: action.data.setAddressForm},

            };
        case actionTypes.PAYMENT_VALUE_SUCCESS:
            return {
                ...state,
                ...{ data: action.data},

            };
        case actionTypes.GET_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_TARIF_KURIR_SUCCESS:
            return {
                ...state,
                ...{ dataCheckTarif: action.data },
            };
            
        case actionTypes.UPDATE_CLEAR_SUCCESS:
            return {
                ...state,
                // ...{ error: action.data },
                ...{ cartItems: [] },
                ...{amount: 0},
                ...{cartTotal: 0},
                // ...{paymentMetod: null},
                ...{paymentChoice: null},
                ...{totalTransaksi: 0},
                ...{setAddressForm: null},
                ...{totalTransaksi: 0},
                ...{data: null},
            };
        default:
            return state;
    }
}

export default reducer;
