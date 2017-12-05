import React, {Component} from 'react';
import RedditImage from './RedditImage';
import {View} from 'react-native';
import Comments from './Comments';

class PostView extends Component{
  render(){
    return(
    <View style={{width:"100%",height:1000,}}>
      {/* <RedditImage dataSource={this.props.dataSource}/> */}
      <Comments dataSource={this.props.dataSource} />
    </View>
    )
  }
}

export default PostView;
