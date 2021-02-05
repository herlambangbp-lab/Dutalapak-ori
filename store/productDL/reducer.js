import { actionTypes } from './action';

export const initKategori = {
    allProduct: null,
    singleProduct: null,
    error: false,
    totalProduct: 0,
    brand: [],
    productsLoading: true,
    productLoading:true,
    searchResults:null,
    searchResultsForDetail:null,

    productByKategori: null,

    allKategori: null,
    subKategori: null,
    amount: 0,
    kategoriTotal: 0,
};

function reducer(state = initKategori, action) {

    switch (action.type) {

        case actionTypes.GET_KATEGORI_SUCCESS:
            return {
                ...state,
                ...{ allKategori: action.payload },
                };

        case actionTypes.GET_KATEGORI_ERROR:
            return {
                ...state,
                ...{ error: action.error },
                };

        case actionTypes.GET_KATEGORI_SUB_ID_SUCCESS:
            return {
                ...state,
                ...{ subKategori: action.data}
                };
        
        case actionTypes.GET_PRODUCTS_BY_NAME_SUCCESS:
            return {
                ...state,
                ...{ singleProduct: action.payload, productsLoading: false },
                };

        case actionTypes.GET_PRODUCTS_BY_KATEGORI_SUCCESS:
            return {
                ...state,
                ...{ productByKategori: action.payload, productsLoading: false },
                };
        case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
            // console.log(action.payload);
            return {
                ...state,
                ...{ searchResults: action.payload },
            };
        case actionTypes.GET_PRODUCTS_BY_DETAIL_SUCCESS:
                // console.log(action.payload);
             return {
                ...state,
                ...{ searchResultsForDetail: action.payload },
            };

        default:
            return state;
    }
}

export default reducer;
