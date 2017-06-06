/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

 import React, { Component,} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Navigator,
   Text,
   View
 } from 'react-native';

import Login from "./login";


class HdMobile extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Login />
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
