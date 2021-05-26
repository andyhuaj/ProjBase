/*
* @Author: Andy Hua
* @Date:   2021-05-03 18:27:41
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 20:46:39
*/
import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button }  from './style.js';
import { actionCreators } from './store/index.js';
import { Redirect } from 'react-router-dom';
 
class Login extends PureComponent {
     
     render() {
         const { islogin } = this.props;
       if(!islogin) {
           return (
                 <LoginWrapper> 
                    <LoginBox>
                       <Input placeholder="用户名" innerRef={(input)=> {this.name = input}}></Input>
                       <Input placeholder="密码" innerRef={(input)=>{this.password=input}}></Input>
                       <Button onClick={()=> this.props.login(this.name, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
          )
       } else {
         return <Redirect to='/' />
       }
     };
}

const mapStateToProps=(state)=>({
   islogin: state.getIn(['login', 'islogin'])

})

const mapDispatchToProps=(dispatch)=> ({
    login(name, password) {
        // console.log(111111111111);
        // console.log(name.value, password.value);
        dispatch(actionCreators.getLoginInfo());
    }
})

export default connect(mapStateToProps ,mapDispatchToProps)(Login);