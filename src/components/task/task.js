import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
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
class Task extends Component {
  constructor(props){
    super(props);


    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: "",
      editTitle: "",
      detailShow: "none",
      id: null,
      done: null,
      listId: this.props.list_id,
      taskArray: [],
      dataSource: this.ds.cloneWithRows(["",""]),
      modalVisible: false,
    };

    // this.handlePress = this.handlePress.bind(this);

  }

  _addTask() {
    const task = {title: this.state.title, list_id: this.props.list_id, done: false};
    this.setState({title: ""});
    this.props.createTask(task);
  }

  _changeTask(){
    const task = {title: this.state.title, list_id: this.props.list_id, done: false, id: this.state.id};
    this.setState({title: "" , id: null, done: null});
    this.props.updateTask(task);
    this.setModalVisible(!this.state.modalVisible, 0);
  }

  _backToLists() {
    this.props.navigator.push({ name: "Lists" });
  }

  _toggleDone(id) {
      const task = this.props.tasks[id];
      task.done = !task.done;
      this.props.updateTask(task);
  }

  _deleteTast() {
    this.props.deleteTask(this.state.id);
    this.setState({id: null});
    this.setModalVisible(!this.state.modalVisible, 0);

  }

  setModalVisible(visible, rowData) {
    if (this.state.title === ""){
      this.setState({modalVisible: visible, id: rowData.id, title: rowData.title});
    } else {
      this.setState({modalVisible: visible, id: rowData.id, title: ""});
    }
    this.setState({ id: rowData.id, done: rowData.done });

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
                <TouchableElement style={styles.button} onPress={() => {
                  this._changeTask();
                }}>
                  <Text style={styles.text}>updateTask</Text>
                </TouchableElement>
              </View>
              <View style={styles.addListView}>
                <View style={styles.height}>
                  <View style={styles.iconView}>
                    <Icon name="trash" size={50} color="#900" onPress={() => {this._deleteTast();}}/>
                  </View>
                </View>
                <View style={styles.height}>
                  <TouchableElement style={styles.buttonHide} onPress={() => {
                    this.setModalVisible(!this.state.modalVisible, 0);
                  }}>
                  <Text style={styles.text}>Hide Modal</Text>
                </TouchableElement>
              </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.head}>
          <View style={styles.back} >
            <Icon name="arrow-circle-left"
              size={30} color='#B3CC57'
              onPress={() => {this._backToLists();}} />
            <Text style={styles.backText}
              onPress={() => {this._backToLists();}} >Back to Lists</Text>
          </View>
        </View>

        <View style={styles.addListView}>
          <View style={styles.height}>
            <TextInput
              placeholder='New Task'
              style={styles.input}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
          <View style={styles.height}>
            <TouchableElement
              disabled={bool}
              style={_buttonName}
              onPress={ () => this._addTask() }>
              <Text style={styles.text}> Add Task </Text>
            </TouchableElement>
          </View>

      </View>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View onPress={() => this.handlePress(rowData.id)}>
            <View style={styles.listItem}>
              <View style={styles.left}>
                <CheckBox
                  style={styles.checkBox}
                  onClick={()=> this._toggleDone(rowData.id)}
                  isChecked={rowData.done}
                  leftText={rowData.title}
                />
              <Text>{rowData.title}</Text>
            </View>
            <Icon name="pencil-square-o"
              size={30} color='#607848'
              style={styles.icon}
              onPress={() => this.setModalVisible(true, rowData)} />
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
  head: {
    backgroundColor: '#607848',
    height: 50,
  },
  back: {
    alignItems: 'center',
    backgroundColor: '#607848',
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row',
    width: 200,

  },
  backText: {
    paddingLeft: 15,
    color: '#e5b718',
    fontSize: 24,
  },
  addListView: {
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,

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
    paddingLeft: 10,

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
    width: 235,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#607848',
    width: 125,
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
  iconView: {
    height: 30,
    width: 50,
  },
  icon: {
    paddingRight: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }

});


export default Task;
