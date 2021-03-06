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
          title: "",
          dataSource: this.ds.cloneWithRows([]),
          // modalVisible: false,
          session_token: this.props.accessToken,
          lists: {},
          listArray: [],
        };
        this.getTasks = this.getTasks.bind(this);
        }
      componentDidMount(){
        this.getLists();
      }
      async getLists() {
        let id = this.state.author_id;
        let accessToken = this.state.session_token
        try {
          let response = await fetch('http://localhost:3000/api/lists?session%5Bid%5D='+id+'&mobile='+true+'&session_token='+accessToken, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
          });
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
        this.setState({dataSource: this.ds.cloneWithRows(lists)});
      }

      getTasks(id) {
        this.navigate("task", id);
      }

      navigate(routeName, id) {
        this.props.navigator.push({
          name: routeName,
          passProps: {
            accessToken: this.state.session_token,
            userId: this.state.author_id,
            listId: id,
          }
        });
      }

      _renderRow(rowData){
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
         TouchableElement = TouchableNativeFeedback;
        }
        return (
          <TouchableElement
            onPress={() => this.getTasks(rowData.id)}>
          <Text>{rowData.title}</Text>
          </TouchableElement>
        )
      }

      _addList(){
        this.props.navigator.push({
          name: "addEdit",
        })
      }



      render() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
         TouchableElement = TouchableNativeFeedback;
        }

        return (
          <View style={styles.page}>
              <Text>Lists</Text>
              <View>

                <TouchableElement
                  onPress={() =>this._addList()}><Text>+</Text></TouchableElement>
              </View>
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
