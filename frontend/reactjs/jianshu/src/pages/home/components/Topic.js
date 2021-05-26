/*
* @Author: Andy Hua
* @Date:   2021-04-22 21:53:40
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-03 13:11:25
*/
import React , { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style.js'
import { connect } from 'react-redux';


class Topic extends PureComponent {
     render() {return (
          <div>
            <TopicWrapper>
               {
                  this.props.list.map((item)=> {
                    return(
                         <TopicItem key={item.get('id')}>
                            <img className='topic-pic' src={item.get('imgUrl')}/>
                            {item.get('title')}
                        </TopicItem>
                        )
                  })
               }
             </TopicWrapper>
           </div>
          )
     };
}

const mapStateToProps = (state) => ({
   list : state.get('home').get('topicList')
});

export default connect(mapStateToProps, null)(Topic);