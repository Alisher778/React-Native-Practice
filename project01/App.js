import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  state = {input: 'hey', k: ''}

  inputHandler = val => {
    this.setState({input: val});
  }

  value = (e) => {
    alert(e.target.value)
  }
  render() {
    return(
      <View style={styles.font}>
        <Text>{this.state.input}</Text>
        <Text style={styles.fontText}>
          Hello Man
        </Text>
        <TextInput value="" onChange={this.value} style={styles.input} />
        <TextInput 
			style={styles.input} 
			value={this.state.input} 
			onChangeText={this.inputHandler}
			spellCheck={true}
			autoCapitalize="sentences"
		/>
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
    borderWidth: 1
  }
}) 