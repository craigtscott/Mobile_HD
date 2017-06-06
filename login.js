'use strict'
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

class Login extends Component {
  constructor(){
    super();

    this.state = {
      user_name: "",
      password: "",
      error: "",
      showProgress: false,
    }
    this.onLoginPressed = this.onLoginPressed.bind(this);
  }


  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  async storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  async onLoginPressed(info={}) {
    let user = Object.assign(this.state, info);
    let username = user.user_name;
    let password = user.password;
    debugger;
    try {
      let response = await fetch('http://localhost:3000/api/session', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          user:{
            user_name: username,
            password: password,
            mobile: true,
          }
        })
      });
    let res = await response.text();
    if (response.status >= 200 && response.status < 300) {
          //Handle success
          let accessToken = res;
          console.log(accessToken);
          //On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);
          this.redirect('list');
    } else {
      //Handle error
        let error = res;
        throw error;
      }
    } catch(error) {
       this.setState({error: error});
       console.log("error " + error);
       this.setState({showProgress: false});
   }
  }


  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    return (
    <View style={styles.login}>
        <Text style={styles.title}> Honey Do </Text>
        <Text style={styles.title}> Mobile </Text>
      <View style={styles.inputView}>
        <View style={styles.height}>
          <TextInput
            onChangeText={(name) => this.setState({user_name: name})}
            style={styles.input}
            placeholder="Username"
          />
        </View>
        <View style={styles.height}>
          <TextInput
            onChangeText={(pass) => this.setState({password: pass})}
            placeholder='Password'
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      <View style={styles.height}>
        <TouchableElement
          style={styles.button}
          onPress={() => this.onLoginPressed()}>
          <Text style={styles.text}> Login </Text>
        </TouchableElement>
      </View>
      <View style={styles.height}>
        <TouchableElement style={styles.button}
          onPress={() => this.onLoginPressed({user_name: 'demo', password: 'password'})}>
          <Text style={styles.text}> Demo </Text>
        </TouchableElement>
      </View>
      <Button
        onPress={() => this._signup() }
        title="Sign Up"
        color="#841584"
      />

      </View>
      <Text>
      {this.state.error}
      </Text>
    </View>
    );

  }
}
const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#B3CC57',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    marginTop: 50,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#604848',
    width: 300,
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
  name: {

  },
});

export default Login;
