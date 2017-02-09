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
class List extends Component {
  constructor(props){
    super(props);


    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      listArray: [],
      dataSource: this.ds.cloneWithRows(["",""]),
    };

    this.handlePress = this.handlePress.bind(this);

  }
  componentWillMount() {
    this.props.getLists();

  }

  handlePress(id) {
    console.log("victory", id);
  }

  componentWillReceiveProps(props) {
    // debugger;
    let temp = [];
    for (var list in props.lists) {
    if (props.lists.hasOwnProperty(list)) {
      console.log(props.lists[list].title);
      temp.push(props.lists[list]);
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


export default List;
