/*
* @Author: Andy Hua
* @Date:   2021-04-16 23:09:49
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-04-16 23:19:04
*/
import * as constants from './constants.js';

export const search_focus = ()=> ({
         type: constants.SEARCH_FOCUS
})

export const search_blur = ()=> ({
    type: constants.SEARCH_BLUR
})