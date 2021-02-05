import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
//ini penambahan
import productDL from './productDL/reducer';
import collectionDL from './collectionDL/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
// import profil from './profil/reducer';
// import collection from './collection/reducer';

export default combineReducers({
    // profil,
    auth,
    post,
    product,
    productDL,
    collectionDL,
    setting,
    cart,
    compare,
    wishlist,
    // collection,
});
