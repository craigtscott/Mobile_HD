import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Navigator,
        TouchableHighlight} from 'react-native';
import { Provider } from 'react-redux';
import SessionContainer from './session/session_container';
import ListContainer from './list/list_container';
import configureStore from '../store/store';

class hdMobile extends Component {
  renderScene(route, navigator){

    switch (route.name){
      case 'Login': return (<SessionContainer navigator={navigator} />);
      case 'Lists': return (<ListContainer navigator={navigator} />);
    }
  }


  render() {
    const store = configureStore();
    window.store = store;
    return (
      <Provider store={store}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Login' }}
          renderScene={ this.renderScene }
        />
      </Provider>
    );
  }
}
export default hdMobile;