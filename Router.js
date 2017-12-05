import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import PostView from './components/PostView';
import RedditList from './components/RedditList'


const RouterComponent = ()=>{
  return(
    <Router>
      <Scene key="root">
        <Scene key="redditView" component={RedditList} title="Reddit/awww"/>
      <Scene key="postView" component={PostView}/>
    </Scene>
    </Router>
  )
}

export default RouterComponent;
