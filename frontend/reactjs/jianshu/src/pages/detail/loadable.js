/*
* @Author: Andy Hua
* @Date:   2021-05-03 21:17:01
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 21:18:54
*/
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
   loader : ()=> import('./'),
   loading() {
      return <div>正在加载......</div>
   }
});

export default ()=> <LoadableComponent/>