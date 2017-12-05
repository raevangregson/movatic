import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export class RedditImage extends Component{

render(){
  const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      marginTop:10,
      alignItems: 'center',
    },
  photo: {
    marginTop:80,
    height: 300,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
  },
});
  return(
    <View style={styles.parentContainer}>
      <Image source={{ uri:this.props.dataSource.thumbnail}} style={styles.photo} />
    </View>
    );
  }
}

export default RedditImage;
