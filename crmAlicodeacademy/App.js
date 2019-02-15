import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  state = {name: ''};
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput 
          onChangeText={(val) => this.setState({name: val})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
