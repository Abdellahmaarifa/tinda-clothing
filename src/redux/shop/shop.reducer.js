import SHOP_DATA from './shop.data';
const INIAL_STATE = {
    collections : SHOP_DATA
};


const shopReducer = (state=INIAL_STATE, action) => {
    switch(action.type){
        default : 
            return state;
    }
}

export default shopReducer;