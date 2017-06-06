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
    };
  }

  // storeToken(responseData){
  //   AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
  //     if(err){
  //       console.log("an error");
  //       throw err;
  //     }
  //     console.log("success");
  //   }).catch((err)=> {
  //       console.log("error is: " + err);
  //   });
  // }

  // async _handleSubmit() {
  //   try {
  //     let responce = await fetch('http://localhost:3000/api/session', {
  //       method: 'POST',
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //       body: JSON.stringify({
  //         user:{
  //           user_name: "A",
  //           password: "password",
  //         }
  //       })
  //     });
  //   let res = await responce.text();
  //   if (response.status >= 200 && response.status < 300) {
  //         //Handle success
  //         let accessToken = res;
  //         console.log(accessToken);
  //         //On success we will store the access_token in the AsyncStorage
  //         // this.storeToken(accessToken);
  //         // this.redirect('home');
  //   } else {
  //     //Handle error
  //         let error = res;
  //         throw error;
  //     }
  //   } catch(error) {
  //      this.setState({error: error});
  //      console.log("error " + error);
  //      this.setState({showProgress: false});
  //  }
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user)
    // .then(() =>
    //   this.props.navigator.push({ name: "Lists" }));
  // }

  // _signup() {
  //   this.props.navigator.push({ name: "SignUp"});
  // }

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
          onPress={() => this._handleSubmit.bind(this) }>
          <Text style={styles.text}> Login </Text>
        </TouchableElement>
      </View>
      <Button
        onPress={() => this._signup() }
        title="Sign Up"
        color="#841584"
      />
      <Text>
         {this.state.error}
       </Text>

      </View>
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
