import { UPDATE_COLLECTION } from '../types';

const initialState = {
    shopData: {},
    isLoading: true
}

const shopReducer = (state=initialState, action) => {

    const {type} = action;

    switch(type){
        case UPDATE_COLLECTION:
            return{
                ...state,
                shopData: action.payload,
                isLoading: false
            }
        default:
            return state
    }

}

export default shopReducer;