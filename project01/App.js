import React, {Component} from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View} from 'react-native';

export default class App extends Component {
  state = {input: '', k: ''}

  inputHandler = val => {
    this.setState({input: val});
  }

  value = (e) => {
    this.setState({k: e.value})
    alert(e)
  }
  render() {
    return(
      <View style={styles.font}>
        <Text>{this.state.input}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
          <TextInput value={this.state.input} onChangeText={this.inputHandler} style={styles.input}/>
          <Button title="Clikc Me Bitch" color="red" style={styles.button}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 200,
    textAlign: 'center',
    padding: 20
  }, fontText: {
    fontSize: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '70%'
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'red',
    width: '30%',
    borderRadius: 8,
    alignItems: 'center',
  }
}) 