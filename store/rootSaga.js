import { all } from 'redux-saga/effects';
import PostSaga from './post/saga';
import ProductSaga from './product/saga';
//ini penambahan
import ProductDLSaga from './productDL/saga';
import CollectionDLSaga from './collectionDL/saga';
import SettingSaga from './setting/saga';
import CartSaga from './cart/saga';
import AuthSaga from './auth/saga';
import CompareSaga from './compare/saga';
import WishlistSaga from './wishlist/saga';
// import ProfilSaga from './profil/saga';
// import CollectionSaga from './collection/saga';

export default function* rootSaga() {
    yield all([
        // ProfilSaga(),
        PostSaga(),
        ProductSaga(),
        ProductDLSaga(),
        SettingSaga(),
        CartSaga(),
        AuthSaga(),
        CompareSaga(),
        WishlistSaga(),
        // CollectionSaga(),
        CollectionDLSaga(),
    ]);
}
