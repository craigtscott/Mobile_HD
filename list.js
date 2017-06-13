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
          author_id: this.props.userId,
          // title: "",
          // id: 0,
          dataSource: this.ds.cloneWithRows([]),
          // modalVisible: false,
          session_token: this.props.accessToken,
          lists: {},
          listArray: [],
        };
        this.getTasks = this.getTasks.bind(this);
    //
    //     this._showTasks = this._showTasks.bind(this);
    //     this._makeNewList = this._makeNewList.bind(this);
    //
    //   }
    //   componentWillMount(props) {
    //     this.props.getLists()
    //     .then((props) => {
    //       if (props.lists){
    //         if (Object.keys(props.lists).length === 0){
    //           this._makeNewList();
    //         }
    //       }
    //     });
    //
    //   }
    //
    // _showTasks(rowData) {
    //     this.props.getTasks(rowData);
    //     this.props.navigator.push({ name: "Tasks", list_id: `${rowData.id}` });
    //
    //   }
    //
    //   _makeNewList() {
    //     let list;
    //     if (this.state.title === "") {
    //       list = {title: "New List", author_id: this.props.session.currentUser.id};
    //     } else{
    //       list = {title: this.state.title, author_id: this.props.session.currentUser.id};
    //     }
    //     this.props.createList(list);
    //     this.setState({title: ""});
    //   }
    //
    //   _changeList() {
    //     list = {title: this.state.title, author_id: this.props.session.currentUser.id, id: this.state.id};
    //     this.props.updateList(list)
    //     .then(() => this.setModalVisible(!this.state.modalVisible, 0));
    //   }
    //
    //   _deleteList() {
    //     this.props.deleteList(this.state.id)
    //     .then(() => this.setModalVisible(!this.state.modalVisible, 0));
    //   }
    //
    //   componentWillReceiveProps(props) {
    //     let temp = [];
    //     for (var list in props.lists) {
    //     if (props.lists.hasOwnProperty(list)) {
    //       temp.push(props.lists[list]);
    //     }
    //   }
    //   debugger;
    //   this.setState({ dataSource: this.ds.cloneWithRows(temp) });
    // };
    //
    //   setModalVisible(visible, rowData) {
    //     if (this.state.title === ""){
    //       this.setState({modalVisible: visible, id: rowData.id, title: rowData.title});
    //     } else {
    //       this.setState({modalVisible: visible, id: rowData.id, title: ""});
    //     }
        }
      componentDidMount(){
        this.getLists();
      }

      async getLists() {
        let id = this.state.author_id;
        let accessToken = this.state.session_token
        try {
          let response = await fetch('http://localhost:3000/api/lists?session%5Bid%5D='+id+'&mobile='+true, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
          });
          // debugger;
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

      setListArray(hash){
        const lists = Object.keys(hash).map(listId => hash[listId]);
        // let listArray = lists.map( (list, idx) => {
        //   return list.title
        // })
        // console.log(listArray);
        this.setState({dataSource: this.ds.cloneWithRows(lists)});
      }

      getTasks(id) {
        debugger;
      }

      _renderRow(rowData){
        return (
          <TouchableHighlight
            onPress={() => this.getTasks(rowData.id)}>
          <Text>{rowData.title}</Text>
          </TouchableHighlight>
        )
      }



      render() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
         TouchableElement = TouchableNativeFeedback;
        }

        // let bool = this.state.title !== "" ? false : true;
        // let _buttonName = bool ? styles.buttonDisabled : styles.button;


        return (
          <View style={styles.page}>
              <Text>hi</Text>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={rowData => (this._renderRow(rowData))}
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
