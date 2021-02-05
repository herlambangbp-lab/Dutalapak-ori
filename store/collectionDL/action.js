export const actionTypes = {
    GET_COLLECTIONS_DL: 'GET_COLLECTIONS_DL',
    GET_COLLECTIONS_DL_SUCCESS: 'GET_COLLECTIONS_DL_SUCCESS',

    

};

export function getCollectionsDL(payload) {
    
    
    return { type: actionTypes.GET_COLLECTIONS_DL, payload };
}

export function getCollectionsDLSuccess(payload) {    
    // console.log('actionjs');
    // console.log("action");
    // console.log(payload);
    // console.log(payload);
    return {
        type: actionTypes.GET_COLLECTIONS_DL_SUCCESS,
        payload,
    };
}

