/*
* @Author: Andy Hua
* @Date:   2021-04-14 23:22:52
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-04-18 16:57:01
*/
import { createStore, compose,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
       applyMiddleware(thunk)
    ));

export default store;