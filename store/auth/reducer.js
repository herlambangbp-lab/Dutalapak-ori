import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    RequestVerificationToken: null,
    AccessToken: null,
    accountInfo: [],
    profilEdit:[],
    dataHistory: null,
    detailTransaksi: null,
};

function reducer(state = initState, action) {
    // console.log(action.data);
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
                // ...{ RequestVerificationToken: action.data.RequestVerificationToken},
                // ...{ AccessToken: action.data.AccessToken},
                ...{ accountInfo: action.data},
            };
            case actionTypes.LOGIN_REQ_SUCCESS:
                return {
                    ...state,
                    // ...{ isLoggedIn: true },
                    ...{ RequestVerificationToken: action.data.RequestVerificationToken},
                    ...{ AccessToken: action.data.AccessToken},
                    // ...{ accountInfo: action.data},
                };
                
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
                ...{ RequestVerificationToken: null },
                ...{ AccessToken: null },
                ...{ profilEdit: [] },
                ...{ accountInfo: []},
            };
        case actionTypes.PROFIL_EDIT_REQUEST_SUCCESS:
            return {
                ...state,
                // ...console.log()
                // ...{ isLoggedIn: true },
                
                // ...{ profilEdit: action.data.RequestVerificationToken},
                
                ...{ profilEdit: action.data},
            };
            
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                // ...{  },
            };
        case actionTypes.CHECK_AUTHORIZATION_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: action.data },
                
            };
        case actionTypes.UPDATE_TRANSAKSI_HISTORY_SUCCESS:
            return {
                ...state,
                ...{ dataHistory: action.data },
                
            };
        case actionTypes.DETAIL_TRANSAKSI_SUCCESS:
            return {
                ...state,
                ...{ detailTransaksi: action.payload },
                
            };
        
        default:
            return state;
    }
}

export default reducer;
