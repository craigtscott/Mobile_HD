'use strict';
import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight,
        AsyncStorage,
        AppRegistry,
        TextInput,
        Button,
        ActivityIndicatorIOS,
        Platform,
        } from 'react-native';

const ACCESS_TOKEN = 'access_token';

class Root extends Component {

  componentWillMount() {
    // this.getToken();
  }
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          console.log("Token not set");
      } else {
          this.verifyToken(accessToken)
      }
    } catch(error) {
        console.log("Something went wrong");
    }
  }
  //If token is verified we will redirect the user to the home page
  async verifyToken(token) {
    let accessToken = token

    try {
      let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/verify?session%5Baccess_token%5D='+accessToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect him to home.
        this.navigate('home');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error response: " + error);
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Welcome To HdMoble</Text>
        <Text>the way to access your todo list on the go!</Text>
        <View style={styles.height}>
          <TouchableHighlight onPress={ this.navigate.bind(this, 'login') } style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#B3CC57',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    marginTop: 50,
  },
  button: {
    flex: 1,
    backgroundColor: '#604848',
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e5b718',
    fontSize: 24,
  },
  title: {
    fontFamily: 'Pacifico',
    color: '#607848',
    fontSize: 40,
    fontWeight: 'bold',
  },
  height: {
    marginTop: 20,
    height: 50,
  },
});


export default Root
