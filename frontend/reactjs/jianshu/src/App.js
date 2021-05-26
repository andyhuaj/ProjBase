import React, { Component } from 'react';
import Header from './common/header/index.js';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import  Home from './pages/home/index.js';
// import  Detail from './pages/detail/index.js';
import  Detail from './pages/detail/loadable.js'; //异步加载detail内容
import  Login from './pages/login/index.js';

class App extends Component {
  render() {
    return (
      <div>
         <Provider store={store}>
          <div>
          <BrowserRouter>
            <Header />
            
               <div>
                   <Route path='/' exact component={Home}/>
                   <Route path='/login' exact component={Login}/>
                   <Route path='/detail/:id' exact component={Detail}/>
               </div>
            </BrowserRouter>
          </div>
         </Provider>
      </div>
    );
  }
}

export default App;
