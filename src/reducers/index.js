//========================================================================================================================================================
/* 
ALL REDUCERS HERE FOR A SINGLE IMPORT IN APP.JS
*/
//========================================================================================================================================================

import counterReducer from './counter';
import loggedReducer from './isLogged';
import navigationReducer from './navigation'
import cartReducer from './cart';
import totalReducer from './totalCart';

import {combineReducers} from 'redux';



const AllReducers = combineReducers({
    counter:counterReducer,
    isLogged : loggedReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    totalCart:totalReducer
})

export default AllReducers