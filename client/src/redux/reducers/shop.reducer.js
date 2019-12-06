import SHOP_DATA from '../utils/shop.data';

const initialState = {
    shopData: SHOP_DATA
}

const shopReducer = (state=initialState, action) => {

    const {type} = action;

    switch(type){
        default:
            return state
    }

}

export default shopReducer;