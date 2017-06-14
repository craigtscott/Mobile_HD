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
      id: this.props.listId,
      // dataSource: this.ds.cloneWithRows([]),
      // modalVisible: false,
      session_token: this.props.accessToken,
      tasks: {},
      taskArray: [],
    };
  }
  componentDidMount(){
    this.getTasks();
  }

  async getTasks() {
    let id = this.state.id;
    let accessToken = this.state.session_token
    try {
      let response = await fetch('http://localhost:3000/api/tasks?tasks%5Blist_id%5D='+id+'&mobile='+true, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });
      debugger;
    let res = await response.text();
    res = JSON.parse(res);
    if (response.status >= 200 && response.status < 300) {
          //Handle success
          this.setState({lists: res});
          console.log(res);
          this.setListArray(res);
          //On success we will store the access_token in the AsyncStorage
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




  render(){
    return (
      <View>
          <Text>hi</Text>

      </View>
  );}
}

export default Task;
