import React, {Component} from 'react';
import {View,Text} from 'react-native';


export default class Title extends Component{
  render(){
    return(
      <View style={{width:"100%",height:100}}>
          <Text style={{textAlign:'center', fontSize:30,}}>{this.props.dataSource.title}</Text>
      </View>
    );
  }
}
