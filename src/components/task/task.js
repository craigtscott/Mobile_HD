import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight,
        AppRegistry,
        TextInput,
        Button,
        ListView
        } from 'react-native';
class Task extends Component {
  constructor(props){
    super(props);


    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      taskArray: [],
      dataSource: this.ds.cloneWithRows(["",""]),
    };

    this.handlePress = this.handlePress.bind(this);

  }
  componentWillMount() {
    // this.props.getTasks();

  }

  handlePress(id) {
    // console.log("victory", id);
  }

  componentWillReceiveProps(props) {
    let temp = [];
    for (var task in props.tasks) {
    if (props.tasks.hasOwnProperty(task)) {
      console.log(props.tasks[task].title);
      temp.push(props.tasks[task]);
      console.log(temp);

    }
  }
  this.setState({ dataSource: this.ds.cloneWithRows(temp) });
};

  render() {

    return (
      <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text onPress={() => this.handlePress(rowData.id)}>{rowData.title}</Text>}
      />
      </View>
    );
  }
}


export default Task;
