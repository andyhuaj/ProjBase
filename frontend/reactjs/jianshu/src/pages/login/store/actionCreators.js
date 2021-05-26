/*
* @Author: Andy Hua
* @Date:   2021-05-03 20:02:30
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 20:28:39
*/
import axios from 'axios';
import { fromJS } from 'immutable';


export const getLoginInfo= ()=> {
  return (dispatch)=> {
      axios.get('/api/login.json').then(
                 (res)=> {
                    const datas = res.data.data;
                    const action = {
                      type: 'get_login',
                      data: datas
                    }
                    dispatch(action);
                 }
          ).catch(()=> {
            console.log('err');
         });
  }
}