/*
* @Author: Andy Hua
* @Date:   2021-05-02 14:55:49
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 13:05:02
*/
import axios from 'axios';
import { fromJS } from 'immutable';


export const getHomeList = ()=> {
  return (dispatch)=> {
      axios.get('/api/home.json').then(
                 (res)=> {
                    const datas = res.data.data;
                    const action = {
                      type: 'get_home_list',
                      topicList : datas.topicList,
                      articleList : datas.articleList,
                      recommendList : datas.recommendList
                    }
                    dispatch(action);
                 }
          ).catch(()=> {
            console.log('err');
         });
  }
}

export const loadMoreArticleList= ()=> {
  return (dispatch)=> {
      axios.get('/api/homeList.json').then(
                 (res)=> {
                    const datas = res.data.data;
                    const action = {
                      type: 'load_more_article_list',
                      list : datas.articleList
                    }
                    dispatch(action);
                 }
          ).catch(()=> {
            console.log('err');
         });
  }
}

export const getScrollTopShow =(show)=> ({
    type: 'toggle_scroll_show',
    show
})