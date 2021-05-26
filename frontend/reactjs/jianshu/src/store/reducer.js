/*
* @Author: Andy Hua
* @Date:   2021-04-14 23:24:28
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 20:08:52
*/
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/header/store/reducer.js';
import  { reducer as headerReducer } from '../common/header/store';
import  { reducer as homeReducer } from '../pages/home/store';
import  { reducer as detailReducer } from '../pages/detail/store';
import  { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    header : headerReducer,
    home : homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;