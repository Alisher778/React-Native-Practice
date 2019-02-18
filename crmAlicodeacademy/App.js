import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import { connect } from 'react-redux'; 
import {addUser, deleteUser} from './src/store/actions/userActions';

class App extends Component {
	state = {name: ''}
  addUserHandler = (name) => {
		return this.props.onAddUser(name)
	}

  removeUserHandler = (id) => {
		return this.props.onDeleteUser(id)
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
		{this.props.users.map((user, i) => {
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

const mapStateToProps = (state) => {
	return {
		users: state.users.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddUser: (name) => dispatch(addUser(name)),
		onDeleteUser: (id) => dispatch(deleteUser(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)