/*
* @Author: Andy Hua
* @Date:   2021-05-03 20:02:20
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 20:29:21
*/
import { fromJS } from 'immutable';

const defaultState = fromJS({
       islogin: false
    });

export default  (state = defaultState, action) => {
    
    if (action.type === 'get_login') {
      return state.set('islogin', action.data);
    }
   return state;
}