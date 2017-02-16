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

    this._showTasks = this._showTasks.bind(this);
    this._makeNewList = this._makeNewList.bind(this);

  }
  componentWillMount(props) {
    this.props.getLists()
    .then((props) => {
      if (props.lists){
        if (Object.keys(props.lists).length === 0){
          this._makeNewList();
        }
      }
    });

  }

_showTasks(rowData) {
    this.props.getTasks(rowData);
    this.props.navigator.push({ name: "Tasks", list_id: `${rowData.id}` });

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

  _changeList() {
    list = {title: this.state.title, author_id: this.props.session.currentUser.id, id: this.state.id};
    this.props.updateList(list)
    .then(() => this.setModalVisible(!this.state.modalVisible, 0));
  }

  _deleteList() {
    this.props.deleteList(this.state.id)
    .then(() => this.setModalVisible(!this.state.modalVisible, 0));
  }

  componentWillReceiveProps(props) {
    let temp = [];
    for (var list in props.lists) {
    if (props.lists.hasOwnProperty(list)) {
      temp.push(props.lists[list]);
    }
  }
  debugger;
  this.setState({ dataSource: this.ds.cloneWithRows(temp) });
};

  setModalVisible(visible, rowData) {
    if (this.state.title === ""){
      this.setState({modalVisible: visible, id: rowData.id, title: rowData.title});
    } else {
      this.setState({modalVisible: visible, id: rowData.id, title: ""});
    }
    }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }

    let bool = this.state.title !== "" ? false : true;
    let _buttonName = bool ? styles.buttonDisabled : styles.button;


    return (
      <View style={styles.page}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.");}}
          >
          <View style={{marginTop: 22}}>
            <View>
              <View style={styles.addListView}>
                <View style={styles.height}>
                  <TextInput
                    value={this.state.title}
                    style={styles.input}
                    onChangeText={(title) => this.setState({title})}
                  />
                </View>
                <View style={styles.height}>
                <TouchableElement style={styles.button} onPress={() => {
                  this._changeList();
                }}>
                  <Text style={styles.text}>Update List</Text>
                </TouchableElement>
              </View>
            </View>
            <View style={styles.addListView}>
              <View style={styles.height}>
                <View style={styles.iconView}>
                  <Icon name="trash" size={50} color="#900" onPress={() => {this._deleteList();}}/>
                </View>
              </View>
              <View style={styles.height}>
                <TouchableElement style={styles.buttonHide}
                  onPress={() => {
                  this.setModalVisible(!this.state.modalVisible, 0);
                }}>
                  <Text style={styles.text}>Back to Lists</Text>
                </TouchableElement>
              </View>
            </View>
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
              disabled={bool}
              style={_buttonName}
              onPress={() => this._makeNewList() }>
              <Text style={styles.text}> Add List </Text>
            </TouchableElement>
          </View>

      </View>

      <ListView
        enableEmptySections={true}
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>
            <View
              style={styles.listItem}>
                <View style={styles.listTitle}
                      >

                  <Text onPress={() => {this._showTasks(rowData);}}>{rowData.title}</Text>
                </View>
                <View style={styles.iconView}>
                  <Icon name="pencil-square-o" size={30} color='#607848' onPress={() => {this.setModalVisible(true, rowData);}}/>
                </View>
            </View>
          </View>}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#B3CC57',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  addListView: {
    marginTop: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,
    paddingLeft: 5,
    paddingRight: 5,

  },
  list: {
    marginTop: 10,
    height: 50,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 3,
    borderColor: '#607848',

  },
  listTitle: {
    flex: 1,
    justifyContent: 'center',
    height: 48,
    width: 90,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    width: 230,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#607848',
    width: 130,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHide: {
    flex: 1,
    backgroundColor: '#607848',
    width: 200,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    flex: 1,
    backgroundColor: 'grey',
    width: 125,
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
  height: {
    // paddingTop: 20,
    height: 60,
  },
iconView: {
  height: 30,
  width: 50,
},

});


export default List;
