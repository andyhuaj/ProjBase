/*
* @Author: Andy Hua
* @Date:   2021-04-22 21:54:46
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 13:11:20
*/
import React , { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style.js';
import { connect } from 'react-redux';
// import * as actionCreators from '../store/actionCreators.js';
// import axios from 'axios';

//item.get('id') , error: item.get() is not a funciton, need to add fromJS() in reducer.
class Recommend extends PureComponent {
     render() {
        return (
                 <RecommendWrapper>
                  {
                    this.props.list.map((item) => {
                        return (
                              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
                            )
                    })
                  }
                 </RecommendWrapper>
            )
        }

    
}


const mapStateToProps = (state) => ({
   list : state.getIn(['home', 'recommendList'])
})


export default connect(mapStateToProps , null) (Recommend);