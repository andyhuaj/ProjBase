/*
* @Author: Andy Hua
* @Date:   2021-04-11 21:34:24
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 20:21:16
*/
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper , Logo, Nav, NavItem, NavSearch, Addition, Button,
       SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch,
       SearchInfoItem
     } from './style.js';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import { Link } from 'react-router-dom';

class Header extends Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     focused: false
    //   }
    //   this.handleInputFocus= this.handleInputFocus.bind(this);
    //   this.handleInputBlur=this.handleInputBlur.bind(this);
    // }

    render() {
        const { focused , handleInputFocus , handleInputBlur, list, islogin } = this.props;
       return  <HeaderWrapper>
                 <Link to='/'> <Logo/> </Link>
                  
                  <Nav> 
                     <NavItem className='left active'>首页</NavItem>
                     <NavItem className='left'>下载App</NavItem>
                     {
                      !islogin? <NavItem className='right'>登陆</NavItem> : <NavItem className='right'>退出</NavItem>
                     }
                     
                     <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
        
                    <SearchWrapper>
                            <CSSTransition
                                in={focused} timeout={400} 
                                classNames="slide"
                                >
                                 <NavSearch
                                   className={focused ? 'focused' :''}
                                   onFocus={()=> handleInputFocus(list)}
                                   onBlur={handleInputBlur}
                                 ></NavSearch>
                            </CSSTransition>
                             <i className={focused ? 'iconfont focused zoom' :'iconfont zoom'}>&#xe612;</i>
                           {this.showSearchInfo()}
                           
                    </SearchWrapper>

                     <Addition>
                        <Button className='write'><i className="iconfont">&#xe724;</i>写文章</Button>
                        <Button className='reg'>注册</Button>
                     </Addition>
                  </Nav>
               </HeaderWrapper>
    }

    // handleInputFocus() {
    //     this.setState({
    //         focused:true
    //     })
    // }

    // handleInputBlur() {
    //    this.setState({
    //         focused:false
    //     })
    // }

    showSearchInfo(){
        const { focused , mouseIn,  list, pageNo, handleClickSwitch, handleMouseEnter, handleMouseLeave } = this.props;
        if (focused || mouseIn) {
           const pageList = [];
           const newList = list.toJS();
           for (var i = (pageNo -1 ) * 10; i < pageNo *10; i++) {
               pageList.push(newList[i]);
           }

           return (
            <SearchInfo onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}> 
               <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch onClick={()=> handleClickSwitch(this.spinIcon)}>
                    <i ref={(icon)=> {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                    换一批
                    </SearchInfoSwitch>
               </SearchInfoTitle>

               {pageList.map((item, index)=>{
                 return (<SearchInfoItem key={index}>{item}</SearchInfoItem>)
               })}
           </SearchInfo>)

        } else {
            return null
        }
    }
}



const mapStateToProps=(state)=> {
  return {
      // focused : state.focused
      // focused : state.header.focused
      // focused : state.header.get('focused')
      // focused : state.get('header').get('focused')
      focused : state.getIn(['header', 'focused' ]),
      // list: ['教育2','科研2','军事2','美妆2', '母婴2']
      list : state.getIn(['header', 'list' ]),
      pageNo : state.getIn(['header', 'pageNo' ]),
      mouseIn : state.getIn(['header' , 'mouseIn']),
      islogin: state.getIn(['login', 'islogin'])
  }

}

const mapDispatchToProps=(dispatch)=> {
    return {
    handleInputFocus(list) {
        // const action = {
        //     type: 'search_focus'
        // }
        // dispatch(action);
        dispatch(actionCreators.search_focus());
        (list.size === 0) && dispatch(actionCreators.getList());

    },

    handleInputBlur() {
        // const action = {
        //     type: 'search_blur'
        // }
        // dispatch(action);
        dispatch(actionCreators.search_blur());
       
    },

    handleClickSwitch(spinIcon) {
        let iconAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
        if(iconAngle) {
           iconAngle = parseInt(iconAngle);
        } else {
            iconAngle = 0;
        }
        spinIcon.style.transform = "rotate(" + (iconAngle +360) + "deg)";

        dispatch(actionCreators.click_switch());
    },

    handleMouseEnter() {
       dispatch(actionCreators.mouse_enter());
    }, 

    handleMouseLeave() {
       dispatch(actionCreators.mouse_leave());
    }


 }
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);