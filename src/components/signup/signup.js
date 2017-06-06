import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight,
        AppRegistry,
        TextInput,
        Button,
        Platform
        } from 'react-native';
class SessionSignup extends Component {
  constructor(props){
    super(props);


    this.state = {
      first_name: "",
      last_name: "",
      user_name: "",
      password: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);

  }
  _handleSubmit() {

    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // .then(() =>
    //   this.props.navigator.push({ name: "Lists" }));
  }

  _login() {
    this.props.navigator.push({ name: "Login"});
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
              style={styles.input}
              placeholder='First Name'
              onChangeText={(first_name) => this.setState({first_name})}
              value={this.state.first_name}
            />
          </View>
          <View style={styles.height}>
            <TextInput
              style={styles.input}
              placeholder='Last Name'
              onChangeText={(last_name) => this.setState({last_name})}
              value={this.state.last_name}
            />
          </View>
          <View style={styles.height}>
            <TextInput
              style={styles.input}
              placeholder='Username'
              onChangeText={(user_name) => this.setState({user_name})}
              value={this.state.user_name}
            />
          </View>
          <View style={styles.height}>
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
        <View style={styles.height}>
          <TouchableElement
            style={styles.button}
            onPress={() => this._handleSubmit() }>
            <Text style={styles.text}> Sign Up </Text>
          </TouchableElement>
        </View>
        <Button
          onPress={() => this._login() }
          title="Log in"
          color="#841584"
        />

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

    // border: 3 solid black,
    // justify-content: center;

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

export default SessionSignup;
