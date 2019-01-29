import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import axios from 'axios';
import List from './src/components/List/List';

export default class App extends Component{
  state = {users: [{name: 'Alisher', email: 'ali@gmail.com'}], msg: '', status: null}

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => this.setState(data => {
        return {users: res}
      }))
      .catch(err => this.setState({msg: err, status: false}));
  }

  removeListHandler = (id) => {
    return this.setState({users: this.state.users.filter(user => user.id !== id)})
  }
  render() {
    const usersList = this.state.users.map((user, i) => {
      return (
        <List key={i} id={user.id} name={user.name} email={user.email} remove={this.removeListHandler} />
      );
    })
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.msg}</Text>
        <View style={{width: "100%", padding: 5,}}>{usersList}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  column: {
    flexDirection: 'column',
  }
});
