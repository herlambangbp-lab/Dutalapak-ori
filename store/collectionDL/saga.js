import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, getCategoriesDLSuccess, getCollectionsDLSuccess } from './action';
import { isStaticData } from '../../utilities/app-settings';
import CollectionRepository from '../../repositories/CollectionRepositoryIndex';
import StaticCollectionRepository from '../../repositories/static/StaticCollectionRepository';
polyfill();

function* getCollectionsDL({ payload }) {
    // const data = yield call(
    //     CollectionRepository.getCollections,
    //     payload
    // );

    try {

        const staticData = true;
        // const dataFix = yield call(
        //     CollectionRepository.getCollections,
        //     payload
        // );
        // console.log(dataFix);
        // if (dataFix.lenght == 3 ) {
        //     staticData = true;
        // }

        
        if (staticData === true) {
            const data = yield call(
                CollectionRepository.getCollections,
                payload
            );
            yield put(getCollectionsDLSuccess(data));
        } else {
            const data = yield call(
                StaticCollectionRepository.getCollections,
                payload
            );
            // console.log(data);
            yield put(getCollectionsDLSuccess(data));

        }
    } catch (err) {
        console.log(err);
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COLLECTIONS_DL, getCollectionsDL)]);



}
