import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';

export default class App extends Component {
  state = {name: 'Hello', users: []};
  addUserHandler = (val) => {
    return this.setState({users: [...this.state.users, {name: val, id: Date.now()}]})
  }

  removeUserHandler = (key) => {
	this.setState(prevState => {
		return {users: prevState.users.filter(user => user.id !== key)}
	})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
		<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
			<TextInput 
				onChangeText={(val) => this.setState({name: val})}
				style={styles.border}
			/>
			<Button 
				color="red"
				title="Add User"
				onPress={() => this.addUserHandler(this.state.name)}
				style={styles.btn}
			/>
		</View>
		{this.state.users.map((user, i) => {
			return (
				<TouchableHighlight key={user.id} onPress={() => this.removeUserHandler(user.id)}>
					<Text>{user.name}</Text>
				</TouchableHighlight>
			)
		})}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'blue',
	width: '70%',
	height: 35
  },
  btn: {
	  width: '30%',
	  height: 35,
	  padding: 5
  }
});
