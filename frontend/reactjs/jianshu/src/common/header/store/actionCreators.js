/*
* @Author: Andy Hua
* @Date:   2021-04-16 23:09:49
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-04-19 23:34:22
*/
import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList= (data)=> ({
    type : constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:  Math.ceil(data.length / 10)
});


export const search_focus = ()=> ({
         type: constants.SEARCH_FOCUS
});

export const search_blur = ()=> ({
    type: constants.SEARCH_BLUR
});

export const getList =()=> {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=> {
                     const data = res.data;
                    const action = changeList(data.data);
                    dispatch(action);
                } ).catch(() => {
                    console.log('err');
                }
            );
    }
};

export const click_switch=()=> ({
    type : constants.CLICK_SWITCH
});


export const mouse_enter=() => ({
    type : constants.MOUSE_ENTER
});

export const mouse_leave=() => ({
    type : constants.MOUSE_LEAVE
});
