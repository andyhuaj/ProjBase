// import React , { Component } from 'react';
import React , { PureComponent } from 'react';
import { HomeWrapper, 
HomeLeft,
HomeRight
 } from './style.js';
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
import { connect } from 'react-redux';
import axios from 'axios';
import { actionCreators } from './store/index.js';
import { BackTop } from './style.js';


class Home extends PureComponent {
    render() { return (
          <HomeWrapper>
               <HomeLeft>
                 <img className='banner-img' 
                 src='https://upload-images.jianshu.io/upload_images/2535252-d5a0a93753612399?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp'/>
                 <Topic />
                 <List />
                 
               </HomeLeft>
               <HomeRight>
                   <Recommend />
                   <Writer />
               </HomeRight>

               { this.props.showFlag ? <BackTop onClick={this.handleScrollTop} >回到顶部</BackTop> : null}
               
          </HomeWrapper>
          )
     };

     componentDidMount() {
        this.props.onReady();
        window.addEventListener('scroll' , this.props.changeScrollTopShow)
     }

     handleScrollTop() {
        window.scrollTo(0, 0);
     }


}

const mapStateToProps =(state)=> ({
   showFlag : state.getIn(['home', 'showFlag'])
});

const mapDispatchToProps = (dispatch)=> {
     return {
       onReady() {
            dispatch(actionCreators.getHomeList());
        },

        changeScrollTopShow() {
          if(document.documentElement.scrollTop > 100) {
             dispatch(actionCreators.getScrollTopShow(true));
          } else {
             dispatch(actionCreators.getScrollTopShow(false));
          }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);