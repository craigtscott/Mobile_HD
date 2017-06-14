import React, { Component } from 'react';
import {Text,
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


class Task extends Component {
  constructor(props){
    super(props);

    this.state = {
      author_id: this.props.userId,
      // title: "",
      id: this.props.id,
      // dataSource: this.ds.cloneWithRows([]),
      // modalVisible: false,
      session_token: this.props.accessToken,
      tasks: {},
      taskArray: [],
    };
  }
  componentDidMount(){
    debugger;;
  }



  render(){
    return (
      <View>
          <Text>hi</Text>

      </View>
  );}
}

export default Task;
