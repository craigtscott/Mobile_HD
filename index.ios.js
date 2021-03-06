 'use strict';
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Navigator,
   Text,
   View
 } from 'react-native';

import Root from './root';
import Login from "./login";
import List from "./list";
import Task from "./task";
import ListAddEdit from "./list_add_edit";


class HdMobile extends Component{

  renderScene(route, navigator) {
    console.log(route);
    if(route.name === 'root') {
      return <Root navigator={navigator} />;
    }
    if(route.name === 'login') {
      return <Login navigator={navigator} />;
    }
    if (route.name === 'list') {
      return <List navigator={navigator} {...route.passProps} />;
    }
    if (route.name === 'task') {
      return <Task navigator={navigator} {...route.passProps} />;
    }
    if (route.name === 'addEdit') {
      return <ListAddEdit navigator={navigator} {...route.passProps} />;
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('hdMobile', () => HdMobile);
