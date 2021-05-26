import axios from 'axios';
import { fromJS } from 'immutable';


export const getDetailInfo= ()=> {
  return (dispatch)=> {
      axios.get('/api/detail.json').then(
                 (res)=> {
                    const datas = res.data.data;
                    const action = {
                      type: 'get_detail_info',
                      title: datas.title,
                      content: datas.content
                    }

                    dispatch(action);
                 }
          ).catch(()=> {
            console.log(6666666666666666);
            console.log('err');
         });
  }
}