/*
* @Author: Andy Hua
* @Date:   2021-04-22 21:54:16
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 17:52:49
*/
import React , { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style.js';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index.js';
import { Link } from 'react-router-dom';


class List extends PureComponent {
     render() {
        return (
          <div>
            {
              this.props.articlist.map((item)=>{
                return (
                  <Link to={'/detail/'+ item.get('id')} key ={item.get('id')}>
                   <ListItem >
                       <img className='list-pic' src={item.get('imgUrl')}/>
                       <ListInfo>
                         <h3 className='title'>{item.get('title')}</h3>
                         <p className='desc'>{item.get('desc')}</p>
                       </ListInfo>
                     </ListItem>
                   </Link>  
                )

              })
            }
            <LoadMore onClick={this.props.handerClickLoadMore}>阅读更多</LoadMore>
          </div>
          )
     };
}

const mapStateToProps = (state) => ({ //dont forget this ()
   //articlist : state.get('home').get('articleList')
   articlist : state.getIn(['home', 'articleList'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    handerClickLoadMore() {
      dispatch(actionCreators.loadMoreArticleList());
      console.log(11111);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);