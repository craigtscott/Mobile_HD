import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight,
        AppRegistry,
        TextInput,
        Button,
        ListView,
        Platform,
        Modal,
        } from 'react-native';
class ListAddEdit extends Component {
  constructor(props){
    super(props);
  }

  _done() {
    this.props.navigator.pop();
  }

render() {

  return (
    <View>
    <Text>AddEdit</Text>
    <Button
      onPress={() => this._done() }
      title="Done"
      color="#841584"
    />
    </View>
  );
}

}

export default ListAddEdit;
