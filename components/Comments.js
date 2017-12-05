import React, {Component} from 'react';
import { WebView,ActivityIndicator, StyleSheet, Image, ListView, Text, View} from 'react-native';


export default class Comments extends Component {

    constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  // componentDidMount() {
  //
  //   return fetch('https://www.reddit.com'+this.props.dataSource.permalink+'.json?')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //       this.setState({
  //         isLoading: false,
  //         dataSource: ds.cloneWithRows(responseJson.data.children),
  //       }, function() {
  //         //do something with new state.
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  //
  // ListViewItemSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //
  //         height: .5,
  //         width: "100%",
  //         backgroundColor: "#000",
  //
  //       }}
  //     />
  //   );
  // }


  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{flex: 1, paddingTop: 20}}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
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
      marginRight:60,
      alignItems: 'center',
    },
  });
    return (

      <View style={styles.parentContainer}>
        {/* <ListView
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          renderRow={
            (rowData) =>
          <View style= {styles.container} >
            <Text style = {styles.text}>{rowData.data.body}</Text>
         </View>
          }
        /> */}

        <WebView
        source={{uri: 'https://www.reddit.com'+this.props.dataSource.permalink}}
      />

      </View>
    );
  }
}
