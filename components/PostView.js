import React, {Component} from 'react';
import RedditImage from './RedditImage';
import {View} from 'react-native';
import Comments from './Comments';
import Title from './Title';

class PostView extends Component{
  render(){
    return(
    <View style={{width:"100%",height:1000,}}>
      <RedditImage dataSource={this.props.dataSource}/>
      <Title dataSource={this.props.dataSource}/>
      <View style={{width:"100%",height:500,}}>
          <Comments dataSource={this.props.dataSource} />
      </View>
    </View>
    )
  }
}

export default PostView;
