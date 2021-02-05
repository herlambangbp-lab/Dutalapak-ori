import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';
import TransaksiRepositoryIndex from '../../repositories/TransaksiRepositoryIndex';
import {
    actionTypes,
    getCartError,
    getCartSuccess,
    updateCartSuccess,
    updateCartError,
    addAddressFormSuccess,
    paymentValueSuccess,
    getClearSuccess,
    getCartKurirSuccess,
    getCheckTarifSuccess,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

export const calculateAmount = (obj) =>
// console.log(obj);
    Object.values(obj)
    
        .reduce((acc, { quantity, harga }) => acc + quantity * harga, 0)
        // .toFixed(4);

export const calculateTransaksi = (obj) =>

Object.values(obj)
    
        // .reduce((acc, { quantity, harga }) => acc + quantity * harga, 0)

function* getCartSaga() {
    try {
        const codePayment = yield call(
            TransaksiRepositoryIndex.getCodePayment,
            
        );
        // console.log(codePayment);
        yield put(getCartSuccess(codePayment));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    try {
        // console.log(payload);
        const { product } = payload;
        const localCart = JSON.parse(localStorage.getItem('persist:martfury'))
            .cart;
        let currentCart = JSON.parse(localCart);
        
        let existItem = currentCart.cartItems.find(
            // console.log();
            (item) => item.pilihanVarian.VariantDetailId === product.pilihanVarian.VariantDetailId
        );
        // console.log(existItem);
        // console.log(currentCart);
        // console.log(product);
        if (existItem) {
            existItem.quantity += product.quantity;
        } else {
            if (!product.quantity) {
                product.quantity = 1;
            }
            currentCart.cartItems.push(product);
        }
        // console.log(currentCart.cartItems);
        currentCart.amount = calculateAmount(currentCart.cartItems);
        currentCart.cartTotal++;
        yield put(updateCartSuccess(currentCart));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        console.log(payload);
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let index = localCart.cartItems.findIndex(
            (item) => item.pilihanVarian.VariantDetailId === product.pilihanVarian.VariantDetailId
        );
        localCart.cartTotal = localCart.cartTotal - product.quantity;
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.pilihanVarian.VariantDetailId === product.pilihanVarian.VariantDetailId
        );
        if (selectedItem) {
            selectedItem.quantity++;
            localCart.cartTotal++;
            // console.log(localCart.cartItems);
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;
        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.pilihanVarian.VariantDetailId === product.pilihanVarian.VariantDetailId
        );

        if (selectedItem) {
            selectedItem.quantity--;
            localCart.cartTotal--;
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
        };
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

function* paymentValueSaga(data) {
    try {
        // console.log(data);
        // // const { payment } = payload;
        let localAuth = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).auth
        );
        const datafix = {
            dataTransaksi: data,
            dataAccount: localAuth,
        }
        
        const response = yield call(
            TransaksiRepositoryIndex.addOrderPayment,
            datafix
        );
        // console.log(response);

        yield put(paymentValueSuccess(response));
        // console.log(localAuth);
        // console.log(payment);
        // console.log(localCart);
        // TransaksiRepositoryIndex

    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addAddressValueSaga(payload) {
    try {
        // console.log(payload);
        const { data } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        // console.log(localCart);
        localCart.setAddressForm = data;
        

        yield put(addAddressFormSuccess(localCart));


    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseOngkirnbSaga(payload) {
    try {
        // console.log(payload);
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );

        localCart.totalTransaksi = localCart.amount+payload.product;
        // console.log(localCart);
        yield put(updateCartSuccess(localCart));
        // console.log();
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseOngkirnbSaga(payload) {
    try {
        // console.log(payload);
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        localCart.totalTransaksi = 0;
        localCart.totalTransaksi = localCart.amount+payload.product;
        // console.log(localCart);
        yield put(updateCartSuccess(localCart));


    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increasePayMethodSaga(payload) {
    try {
        // console.log(payload);
        // // console.log(payload);
        // // const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        localCart.totalTransaksi = localCart.amount+10000+payload.product.fee;
        // console.log(localCart);
        yield put(updateCartSuccess(localCart));
        // // console.log(localCart);
        // localCart.setAddressForm = payload.data;

        // yield put(addAddressFormSuccess(localCart));


    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreasePayMethodSaga(payload) {
    try {
        // console.log(payload);
        // // console.log(payload);
        // // const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        localCart.totalTransaksi = 0;
        localCart.totalTransaksi = localCart.amount+10000+payload.product.fee;
        // console.log(localCart.amount+10000+payload.product.fee);
        yield put(updateCartSuccess(localCart));


    } catch (err) {
        yield put(getCartError(err));
    }
}


function* getClearSaga() {
    try {

        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).cart
        );
        localCart.cartItems = [];
        localCart.amount = 0;
        localCart.cartTotal = 0;
        localCart.totalTransaksi = 0;
        localCart.setAddressForm = null;
        // console.log(localCart.amount+10000+payload.product.fee);
        yield put(getClearSuccess(localCart));


    } catch (err) {
        yield put(getCartError(err));
    }
}

function* getCartKurirSaga(payload) {
    try {
        // console.log(payload);
        const data = yield call(
            TransaksiRepositoryIndex.getCodeKurir,
            payload,
        );
        // yield put(updateCartSuccess(localCart));
// console.log(data);
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* getTarifKurirSaga(payload) {
    try {
        // console.log(payload);
        const data = yield call(
            TransaksiRepositoryIndex.getTarifKurir,
            payload,
        );
        yield put(getCheckTarifSuccess(data));
        
        // console.log(data);
// console.log(data);
    } catch (err) {
        yield put(getCartError(err));
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_ONGKIRNB, increaseOngkirnbSaga)]);
    yield all([takeEvery(actionTypes.DECREASE_ONGKIRNB, decreaseOngkirnbSaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
    yield all([takeEvery(actionTypes.PAYMENT_VALUE, paymentValueSaga)]);
    yield all([takeEvery(actionTypes.ADD_ADDRESS_VALUE, addAddressValueSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_PAYMETHOD, increasePayMethodSaga)]);
    yield all([takeEvery(actionTypes.UPDATE_CLEAR, getClearSaga)]);
    yield all([takeEvery(actionTypes.GET_CART_KURIR, getCartKurirSaga)]);
    yield all([takeEvery(actionTypes.GET_TARIF_KURIR, getTarifKurirSaga)]);
    
    // yield all([takeEvery(actionTypes.DECREASE_PAYMETHOD, decreasePayMethodSaga)]);

}
