import { all, put, takeEvery, call } from 'redux-saga/effects';
import {notification } from 'antd';
import UserAccessRepository from '../../repositories/UserAccessRepository';
import TransaksiRepositoryIndex from '../../repositories/TransaksiRepositoryIndex';

import {    actionTypes, 
            loginSuccess,
            loginReqSuccess, 
            logOutSuccess, 
            regisSuccess,
            editprofilReqSuccess,
            updateProfilSuccess,
            checkAuthSuccess,
            updateTransaksiHistorySuccess,
            testConnectSuccess,
            detailTransaksiSuccess
        } from './action';
const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};
const modalwaiting = type => {
    notification[type]({
        message: 'Checking Data',
        description: 'Mohon tunggu ...',
        duration: 5000000,
    });
};
const modalCek = type => {
    notification[type]({
        message: 'Logout',
        description: 'Sesi Login Anda telah habis Silahkan Login kembali',
        duration: 5000000,
    });
};

function* loginSaga(data) {
    try {
        modalwaiting('warning');
        const userAccess = yield call(
            UserAccessRepository.getLogin,
            data
        );

        const getKurirUser = yield call(
            TransaksiRepositoryIndex.getCodeKurir,
            userAccess,
        );

        console.log(getKurirUser);
        console.log(userAccess);
        // const new1 = userAccess.s
        yield put(loginReqSuccess(userAccess));
        if (userAccess.RespStatus == `OK`) {
            notification.destroy();
            const userProfil = yield call(
                UserAccessRepository.getProfil,
                userAccess
            );
            const userProfilEdit = yield call(
                UserAccessRepository.getProfilEdit,
                userAccess
            );


            yield put(editprofilReqSuccess(userProfilEdit));
            yield put(loginSuccess(userProfil));
            modalSuccess('success');
        } else {
            notification.destroy();
            const modalLoginFail = type => {
                notification[type]({
                    message: 'Login Gagal',
                    description: userAccess.RespStatus,
                });
            };
            modalLoginFail('warning');
        }
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        
        yield put(logOutSuccess());
    } catch (err) {
        console.log(err);
    }
}

function* regisSaga(data) {
    modalwaiting('warning');
    try {
        const userRegis = yield call(
            UserAccessRepository.getRegis,
            data
        );
        if (userRegis.RespStatus != `OK`) {
            notification.destroy();
            const modalregis = type => {
                notification[type]({
                    message: 'Registrasi Gagal',
                    description: userRegis.RespStatus,
                });
            };
        modalregis('warning');
        } else {
            notification.destroy();
            const modalfixlogin = type => {

                notification[type]({
                    message: 'Registrasi Berhasil',
                    description: 'Periksa email untuk verifikasi akun anda',

                    duration: 5000000,
                });
            };
            modalfixlogin('success');
            yield put(regisSuccess());
        }
    } catch (err) {
        console.log(err);
    }
}

function* updateProfilSaga(data) {
    try {
        // console.log(data);
        const updateProfil = yield call(
            UserAccessRepository.getupdateProfil,
            data
        );
        // console.log(updateProfil);
        if (updateProfil.Data.Respon == `Data berhasil diubah.`) {
            notification.destroy();
            const modalSuccesss = type => {
                notification[type]({
                    message: 'update data berhasil',
                    description: updateProfil.Data.Respon,
                });
            };
            const userAccess = {
                AccessToken: data.data.AccessTokenUser,
                RequestVerificationToken: data.data.RequestVerificationTokenUser,
            };
            const userProfilEdit = yield call(
                UserAccessRepository.getProfilEdit,
                userAccess
            );
            yield put(editprofilReqSuccess(userProfilEdit));
            modalSuccesss('success');
        } else {
            notification.destroy();
            const modalLoginFail = type => {
                notification[type]({
                    message: 'update data gagal',
                    description: updateProfil.Data.Respon,
                });
            };
            modalLoginFail('warning');
        }
        // console.log(updateProfil);
        // const userRegis = yield call(
        //     UserAccessRepository.getRegis,
        //     data
        // );
        // yield put(logOutSuccess());
    } catch (err) {
        console.log(err);
    }
}

function* testConnectSaga() {
    try {
       const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
            .auth;
        let currentAuth = JSON.parse(localAuth);

        console.log(currentAuth);
        
            const dataCek = {
                AccessToken: currentAuth.AccessToken,
                RequestVerificationToken: currentAuth.RequestVerificationToken,
            };
        const userProfil = yield call(
                UserAccessRepository.getProfil,
                dataCek
            );
            // console.log(userProfil);
            if (userProfil.error != null) {
                modalCek('warning');
                yield put(logOutSuccess());
                // console.log(userProfil);
                // console.log('eerror null');
            } else {
                location.href='/account/checkout';
                // console.log(userProfil);
                // console.log('lanjutt');
            }
        // console.log(currentAuth);
        // if (currentAuth.AccessToken == null) {
        //     yield put(checkAuthSuccess(false));
        // } else {
        //     yield put(checkAuthSuccess(true));
        // }

    } catch (err) {
        console.log(err);
    }
}
function* checkAuthSaga() {
    try {
       const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
            .auth;
        let currentAuth = JSON.parse(localAuth);
        // console.log(currentAuth);
        if (currentAuth.AccessToken == null) {
            yield put(checkAuthSuccess(false));
        } else {
            yield put(checkAuthSuccess(true));
        }
        
        // console.log(localCart);
        // console.log(currentCart);
    } catch (err) {
        console.log(err);
    }
}
function* updateTransaksiHistorySaga(data) {
    try {
        // console.log(data);
        const reqHistory = yield call(
            UserAccessRepository.getHistory,
            data
        );
        yield put(updateTransaksiHistorySuccess(reqHistory));
    //    const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
    //         .auth;
    //     let currentAuth = JSON.parse(localAuth);
    //     // console.log(currentAuth);
    //     if (currentAuth.AccessToken == null) {
    //         yield put(checkAuthSuccess(false));
    //     } else {
    //         yield put(checkAuthSuccess(true));
    //     }
        
    //     // console.log(localCart);
    //     // console.log(currentCart);
    } catch (err) {
        console.log(err);
    }
}

function* detailTransaksiSaga(data) {
    try {
        const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
        .auth;
        let currentAuth = JSON.parse(localAuth);
        // console.log(currentAuth);
// console.log(data);
// console.log(currentAuth);
// console.log(data);
        const reqDetail = {
            numTransaksi: data.data.completePay,
            accToken: currentAuth.AccessToken,
            reqVerif: currentAuth.RequestVerificationToken,
        };
        // console.log(reqDetail);
        const reqDetailTransaksi = yield call(
            UserAccessRepository.getTransaksiDetail,
            reqDetail
        );
        // console.log(reqDetailTransaksi);
        yield put(detailTransaksiSuccess(reqDetailTransaksi));

    } catch (err) {
        console.log(err);
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, regisSaga)]);
    yield all([takeEvery(actionTypes.UPDATE_PROFIL, updateProfilSaga)]);
    yield all([takeEvery(actionTypes.CHECK_AUTHORIZATION, checkAuthSaga)]);
    yield all([takeEvery(actionTypes.UPDATE_TRANSAKSI_HISTORY, updateTransaksiHistorySaga)]);
    yield all([takeEvery(actionTypes.TEST_CONNECT, testConnectSaga)]);
    yield all([takeEvery(actionTypes.DETAIL_TRANSAKSI, detailTransaksiSaga)]);
    // DETAIL_TRANSAKSI
}
