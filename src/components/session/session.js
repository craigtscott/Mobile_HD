import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight,
        AppRegistry,
        TextInput,
        Button
        } from 'react-native';
class Session extends Component {
  constructor(props){
    super(props);

    this.state = {
      user_name: "cts85",
      password: "password"
    };
    this._handleSubmit = this._handleSubmit.bind(this);

  }
  _handleSubmit() {
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() =>
      this.props.navigator.push({ name: "Lists" })
);

  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(user_name) => this.setState({user_name})}
          value={this.state.user_name}
        />
        <TextInput
          secureTextEntry={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={() => this._handleSubmit() }
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
}

export default Session;
