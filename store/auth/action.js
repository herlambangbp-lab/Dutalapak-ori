export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    CHECK_AUTHORIZATION_SUCCESS: 'CHECK_AUTHORIZATION_SUCCESS',

    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',

    LOGIN_REQ_SUCCESS: 'LOGIN_REQ_SUCCESS',
    PROFIL_REQUEST: 'PROFIL_REQUEST',
    PROFIL_SUCCESS: 'PROFIL_SUCCESS',

    PROFIL_EDIT_REQUEST: 'PROFIL_EDIT_REQUEST',
    PROFIL_EDIT_REQUEST_SUCCESS: 'PROFIL_EDIT_REQUEST_SUCCESS',

    UPDATE_PROFIL: 'UPDATE_PROFIL',
    UPDATE_PROFIL_SUCCESS: 'UPDATE_PROFIL_SUCCESS',

    UPDATE_TRANSAKSI_HISTORY: 'UPDATE_TRANSAKSI_HISTORY',
    UPDATE_TRANSAKSI_HISTORY_SUCCESS: 'UPDATE_TRANSAKSI_HISTORY_SUCCESS',

    TEST_CONNECT: 'TEST_CONNECT',
    TEST_CONNECT_SUCCESS: 'TEST_CONNECT_SUCCESS',

    DETAIL_TRANSAKSI: 'DETAIL_TRANSAKSI',
    DETAIL_TRANSAKSI_SUCCESS: 'DETAIL_TRANSAKSI_SUCCESS', 
};

export function login(username, password) {
    // console.log(username + password );
    return { type: actionTypes.LOGIN_REQUEST,
                username,
                password,
    
    };
}


export function loginSuccess(data) {
    // console.log(data);

    return { 
        type: actionTypes.LOGIN_SUCCESS, 
        data,
    };
}
export function loginReqSuccess(data) {
    return { 
        type: actionTypes.LOGIN_REQ_SUCCESS, 
        data,
    };
}

export function logOut() {

    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}

export function regisUser(email, username, password) {
    // console.log(email + username + password );
    return { type: actionTypes.REGISTER_REQUEST,
                email,
                username,
                password,
    
    };
}

export function regisSuccess() {
    return { type: actionTypes.REGISTER_SUCCESS };
}

export function editprofilReq(data) {
    console.log(data);
    return { type: actionTypes.PROFIL_EDIT_REQUEST, 
                data
    };
}

export function editprofilReqSuccess(data) {
    // console.log(data);
    return { type: actionTypes.PROFIL_EDIT_REQUEST_SUCCESS, 
                data
    };
}

export function updateProfil(data) {
    // console.log(data);
    return { type: actionTypes.UPDATE_PROFIL, 
                data
    };
}

export function updateProfilSuccess(data) {
    // console.log(data);
    return { type: actionTypes.UPDATE_PROFIL_SUCCESS, 
                data
    };
}

export function checkAuth() {
    // console.log(data);
    return { type: actionTypes.CHECK_AUTHORIZATION, 
                
    };
}

export function checkAuthSuccess(data) {
    // console.log(data);
    return { type: actionTypes.CHECK_AUTHORIZATION_SUCCESS, 
                data
    };
}

export function updateTransaksiHistory(data) {
    // console.log(data);
    return { type: actionTypes.UPDATE_TRANSAKSI_HISTORY, 
                data
    };
}

export function updateTransaksiHistorySuccess(data) {
    // console.log(data);
    return { type: actionTypes.UPDATE_TRANSAKSI_HISTORY_SUCCESS, 
                data
    };
}

export function testConnect() {
    // console.log(data);
    return { type: actionTypes.TEST_CONNECT
                
    };
}

export function testConnectSuccess(payload) {
    // console.log(data);
    return { type: actionTypes.TEST_CONNECT_SUCCESS, 
                payload
    };
}

export function detailTransaksi(data) {
    // console.log(data);
    return { type: actionTypes.DETAIL_TRANSAKSI, 
                data
    };
}

export function detailTransaksiSuccess(payload) {
    // console.log(data);
    return { type: actionTypes.DETAIL_TRANSAKSI_SUCCESS, 
                payload
    };
}