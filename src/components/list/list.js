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
class List extends Component {
  constructor(props){
    super(props);


    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      author_id: this.props.session.currentUser.id,
      title: "",
      id: 0,
      dataSource: this.ds.cloneWithRows(["",""]),
      modalVisible: false,
    };

    this.handlePress = this.handlePress.bind(this);
    this._makeNewList = this._makeNewList.bind(this);

  }
  componentWillMount(props) {
    this.props.getLists()
    .then((props) => {
      if (props.lists){
        if (Object.keys(props.lists).length === 0){
        }
      }
    });

  }

  handlePress(id) {
    this.props.getTasks(id);
    this.props.navigator.push({ name: "Tasks" });
    console.log("victory", id);
  }

  _makeNewList() {
    let list;
    if (this.state.title === "") {
      list = {title: "New List", author_id: this.props.session.currentUser.id};
    } else{
      list = {title: this.state.title, author_id: this.props.session.currentUser.id};
    }
    this.props.createList(list);
    this.setState({title: ""});
  }

  componentWillReceiveProps(props) {
    // debugger;
    let temp = [];
    for (var list in props.lists) {
    if (props.lists.hasOwnProperty(list)) {
      temp.push(props.lists[list]);
    }
  }
  this.setState({ dataSource: this.ds.cloneWithRows(temp) });
};

  setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }

    const myIcon = (<Icon name="cog" size={30} color="#900" onPress={() => {this.setModalVisible(true);}}/>);
    return (
      <View style={styles.page}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.");}}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <View style={styles.addListView}>
          <View style={styles.height}>
            <TextInput
              placeholder='New List'
              style={styles.input}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
          <View style={styles.height}>
            <TouchableElement
              style={styles.button}
              onPress={() => this._makeNewList() }>
              <Text style={styles.text}> Add List </Text>
            </TouchableElement>
          </View>

      </View>

      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>

          <Text onPress={() => this.handlePress(rowData.id)}
            style={styles.listItem}
            >{rowData.title}</Text>
              {myIcon}
            </View>}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#B3CC57',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  addListView: {
    marginTop: 15,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,

  },
  list: {
    marginTop: 10,
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
  },
  listItem: {
    borderWidth: 3,
    height: 50,

  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    width: 235,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#604848',
    width: 125,
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
  height: {
    // paddingTop: 20,
    height: 60,
  },

});


export default List;
