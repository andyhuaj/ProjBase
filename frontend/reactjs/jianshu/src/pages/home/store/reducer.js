/*
* @Author: Andy Hua
* @Date:   2021-04-26 23:31:01
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 13:03:44
*/

import { fromJS } from 'immutable';

const defaultState = fromJS({
     topicList : [
        // {
        //     id:1,
        //     imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-3214af4084d37bf1?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp',
        //     title : '社会热点'
        // },

        // {
        //     id : 2,
        //     imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-b37de6129aef6a5b?imageMogr2/auto-orient/strip|imageView2/2/w/1015/format/webp',
        //     title : '手绘'   
        // }
     ],

     articleList : [
         // {
         //     id: 1,
         //     imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-d7ef4352efa98761?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp',
         //     title: '发现美句——村上春树',
         //     desc : '1.哪里会有人喜欢孤独，不过是不喜欢失望罢了。——《挪威的森林》 2.白昼之光，岂知夜色之深。——《且听风吟》 3.孤独一人也没关系，只要能发自...'
         //  },
         //  {
         //     id: 2,
         //     imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-d7ef4352efa98761?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp',
         //     title: '发现美句——村上春树',
         //     desc : '1.哪里会有人喜欢孤独，不过是不喜欢失望罢了。——《挪威的森林》 2.白昼之光，岂知夜色之深。——《且听风吟》 3.孤独一人也没关系，只要能发自...'
         //  }
     ],

     recommendList: [
            //  {  id: 1,
            //    imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-5b35b47eb66c3b2b?imageMogr2/auto-orient/strip|imageView2/2/w/975/format/webp'
            // },
            // {  id: 2,
            //    imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-6ccc69ce6383b8e1?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp'
            // }
     ],

     showFlag : false
});
export default  (state = defaultState, action) => {
  
   if (action.type === 'get_home_list') {
     return state.merge({
        topicList : fromJS(action.topicList),
        articleList : fromJS(action.articleList),
        recommendList : fromJS(action.recommendList)
     })
   }

   if (action.type === 'load_more_article_list') {
    return state.set('articleList', state.get('articleList').concat(fromJS(action.list)))
   }

   if(action.type === 'toggle_scroll_show') {
      return state.set('showFlag', action.show);
   }
   return state;
}