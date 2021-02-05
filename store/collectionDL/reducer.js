import { actionTypes } from './action';

export const initialState = {
    collections: [],
    // categories: [],
    // collection: {},
};

function reducer(state = initialState, action) {

   
    
    
    switch (action.type) {
        case actionTypes.GET_COLLECTIONS_DL_SUCCESS:
            return {
                ...state,
                ...{ collections: action.payload },
                // ...console.log(state),    
            };
        

        
        
        default:
            // console.log("aku tidak masuk");
            
            // console.log(state);
            return state;
           
    }
    // console.log(state);
    
}
// console.log(state);


export default reducer;
