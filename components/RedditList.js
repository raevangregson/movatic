import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Navigator,ActivityIndicator, StyleSheet, Image, ListView, Text, View,TouchableOpacity} from 'react-native';

export default class RedditList extends Component {

  constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
componentDidMount() {

  return fetch('https://www.reddit.com/r/aww.json')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.data.children),
      }, function() {
        //do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#000",

      }}
    />
  );
}


render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
  const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      marginTop: 25,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
});
  return (

    <View style={styles.parentContainer}>

      <ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>
          <TouchableOpacity
                   onPress = {() => this._navigate(rowData.title)}>
       <View style= {styles.container} >
         <Image source={{ url: rowData.data.thumbnail}} style={styles.photo} />
         <Text style={styles.text}>{rowData.data.title}</Text>
       </View>
</TouchableOpacity>
        }
      />

    </View>
  );
}

_navigate(title) {
  this.props.navigator.push({
    name: 'ProfileView',
    passProps: {
      title
    }
  })
}
}
