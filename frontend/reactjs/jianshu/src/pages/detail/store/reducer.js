/*
* @Author: Andy Hua
* @Date:   2021-05-03 17:10:01
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 17:40:04
*/
import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
    // title: '朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己',
    // content : '<img src="https://upload-images.jianshu.io/upload_images/20760323-da2764a07b3f92c6.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/><p>当下，微信已经成为了主流的社交平台，朋友圈也成为了我们分享自己喜怒哀乐的主要场所。不过，很多人却经常发了朋友圈，又立马删除。这也并非是他们不想分享自己的情绪，而是他们在发出朋友圈的那一刻，又觉得自己的行为十分幼稚。</p>'
});

export default  (state = defaultState, action) => {
    
    if (action.type === 'get_detail_info') {
       return state.merge({
           title: action.title,
           content: action.content
       })

    }


   return state;
}