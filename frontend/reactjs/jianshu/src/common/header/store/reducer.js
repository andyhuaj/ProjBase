/*
* @Author: Andy Hua
* @Date:   2021-04-16 22:28:25
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-04-19 23:50:27
*/
import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
     focused : false,
     mouseIn: false,
     list: [],
     pageNo: 1,
     totalPage : 1 
});
export default  (state = defaultState, action) => {

    if (action.type === constants.SEARCH_FOCUS) {

        // const newSate = JSON.parse(JSON.stringify(state));
        // newSate.focused = true;
        // return newSate;
       return state.set('focused', true);
    }


    if (action.type === constants.SEARCH_BLUR) {
        // const newSate = JSON.parse(JSON.stringify(state));
        // newSate.focused = false;
        // return newSate;
        return state.set('focused', false);
    }

    if (action.type === constants.CHANGE_LIST) {
         // return state.set('list', action.data).set('totalPage', action.totalPage);
         return state.merge({
            list : action.data,
            totalPage : action.totalPage
         });
    }

    if (action.type === constants.CLICK_SWITCH) {
        const number = 1;
        if ((state.get('pageNo') + 1) < state.get('totalPage') ) {
           return state.set('pageNo', state.get('pageNo') + 1);
        }
        return state.set('pageNo',number);
    }

    if (action.type === constants.MOUSE_ENTER) {
         return state.set('mouseIn', true);
    }

    if (action.type === constants.MOUSE_LEAVE) {
         return state.set('mouseIn', false);
    }

   return state;

}