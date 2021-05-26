/*
* @Author: Andy Hua
* @Date:   2021-04-22 20:57:06
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 21:14:09
*/
import React , { PureComponent } from 'react';
import { DetailWrapper, Content, Header }  from './style.js';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
     render() {return (
          <DetailWrapper>

            <Header>{this.props.title}</Header>
            <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
          </DetailWrapper>
          )
     };

     componentDidMount() {
        this.props.getDetailInfo();
        console.log(this.props.match.params.id);
     }
}

const mapStateToProps=(state)=> ({
   title: state.getIn(['detail', 'title']),
   content: state.getIn(['detail', 'content']),
})

const mapDispatchToPros=(dispatch)=> ({
    getDetailInfo() {
       dispatch(actionCreators.getDetailInfo());
    }
})

export default  connect(mapStateToProps , mapDispatchToPros)(withRouter(Detail));