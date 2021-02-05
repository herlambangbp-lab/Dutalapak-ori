import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import ProductRepository from '../../repositories/ProductRepositoryIndex';
import {
    actionTypes,
    getKategoriSuccess,
    getKategoriSubIdSuccess,
    getProductsByKategoriSuccess,
    getProductsByNameSuccess,
    getProductByKeywordsSuccess,
    getProductsByDetailSuccess,
} from './action';
// import { getProductsByKeyword } from '../product/action';

polyfill();

function* getKategori() {
    try {
        const result = yield call(ProductRepository.getKategori);        
        yield put(getKategoriSuccess(result));

    } catch (err) {
        console.log(err);
    }
}

function* getKategoriSub({id}) {
    try {
        const result = yield call(
            ProductRepository.getKategoriSub,
            id
        );
        yield put(getKategoriSubIdSuccess(result));
    }
     catch (err) {
        console.log(err);
    }
}

function* getProductsByName(payload) {
    try {
        const result = yield call(ProductRepository.getProductsByName, payload); 
        // console.log(result);
        yield put(getProductsByNameSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getProductsByKategori(payload) {

    try {
        const result = yield call(ProductRepository.getProductsByKategori, payload); 
        yield put(getProductsByKategoriSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getProductsByKeyword({ keyword }) {
    try {
        console.log(keyword);
        const result = yield call(
                ProductRepository.getRecords,
                keyword
            );
            console.log(result);
            yield put(getProductByKeywordsSuccess(result));

    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductsByDetail(keyword) {
    try {
        // console.log(keyword);
        const result = yield call(
                ProductRepository.getRecords,
                keyword
            );
            console.log(result);
            yield put(getProductsByDetailSuccess(result));

    } catch (err) {
        yield put(getProductsError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_KATEGORI, getKategori)]);
    yield all([takeEvery(actionTypes.GET_KATEGORI_SUB_ID, getKategoriSub )]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_NAME, getProductsByName )]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_KATEGORI, getProductsByKategori )]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_KEYWORD, getProductsByKeyword )]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_DETAIL, getProductsByDetail )]);
    
}
