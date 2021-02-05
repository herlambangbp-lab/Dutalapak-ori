export const actionTypes = {
    GET_KATEGORI: 'GET_KATEGORI',
    GET_KATEGORI_SUCCESS: 'GET_KATEGORI_SUCCESS',
    GET_KATEGORI_ERROR: 'GET_KATEGORI_ERROR',

    GET_KATEGORI_SUB_ID: 'GET_KATEGORI_SUB_ID',
    GET_KATEGORI_SUB_ID_SUCCESS: 'GET_KATEGORI_SUB_ID_SUCCESS',

    GET_PRODUCTS_BY_NAME: 'GET_PRODUCTS_BY_NAME',
    GET_PRODUCTS_BY_NAME_SUCCESS: 'GET_PRODUCTS_BT_NAME_SUCCESS',

    GET_PRODUCTS_BY_KATEGORI: 'GET_PRODUCTS_BY_KATEGORI',
    GET_PRODUCTS_BY_KATEGORI_SUCCESS: 'GET_PRODUCTS_BY_KATEGORI_SUCCESS',

    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',

    GET_PRODUCTS_BY_DETAIL: 'GET_PRODUCTS_BY_DETAIL',
    GET_PRODUCTS_BY_DETAIL_SUCCESS: 'GET_PRODUCTS_BY_DETAIL_SUCCESS',
};

export function getKategori() {
    return { type: actionTypes.GET_KATEGORI};
}

export function getKategoriSuccess(payload) {
    return {
        type: actionTypes.GET_KATEGORI_SUCCESS,
        payload,
    };
}

export function getKategoriError(error) {
    return {
        type: actionTypes.GET_KATEGORI_ERROR,
        error,
    };
}

export function getKategoriSubId(id){
    return { 
        type: actionTypes.GET_KATEGORI_SUB_ID,
        id,
    };
}

export function getKategoriSubIdSuccess(data){
    return {
        type: actionTypes.GET_KATEGORI_SUB_ID_SUCCESS,
        data,
    };
}

export function getProductsByName(payload){
    return {
        type: actionTypes.GET_PRODUCTS_BY_NAME,
        payload,
    };
}

export function getProductsByNameSuccess(payload){
    // console.log(payload);
    
    return {
        type: actionTypes.GET_PRODUCTS_BY_NAME_SUCCESS,
        payload,
    };
}



export function getProductsByKategori(payload){
    return {
        type: actionTypes.GET_PRODUCTS_BY_KATEGORI,
        payload,
    };
}

export function getProductsByKategoriSuccess(payload){
    console.log(payload);
    
    return {
        type: actionTypes.GET_PRODUCTS_BY_KATEGORI_SUCCESS,
        payload,
    };
}

export function getProductsByKeyword(keyword) {
    console.log(keyword);
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

export function getProductByKeywordsSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
        payload,
    };
}

export function getProductsByDetail(keyword) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_DETAIL,
        keyword,
    };
}

export function getProductsByDetailSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_DETAIL_SUCCESS,
        payload,
    };
}