import React, {Component} from 'react';
import { 
  Button,
  Image, 
  StyleSheet,
  ScrollView,
  Text, 
  TextInput, 
  View} from 'react-native';
  import City from './src/components/Weather/Weather';
  import Users from './src/components/Users/Users';

export default class App extends Component {
  state = {input: '', city: ['Alo'], error: false};

  inputHandler = val => {
    this.setState({input: val});
  }

  buttonHandler = () => {
    if(this.state.input) {
      this.setState({city: [...this.state.city, this.state.input], input: '', error: false});
    } else {
      this.setState({error: true});
    }
  }

  render() {
    return(
      <View style={styles.font}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center'}}>
          <TextInput
            id="cityInput" 
            value={this.state.input} 
            onChangeText={this.inputHandler} 
            style={this.state.error?styles.error : styles.input}
          />
          <Button 
            title="Clikc Me Bitch" 
            color="navy" 
            style={styles.button}
            onPress={this.buttonHandler}
          />
        </View>
        <ScrollView maximumZoomScale="4">
          <View style={{flexDirection: "column"}}>
            {this.state.city.map((city, i) => <City key={i} id={i+1} name={city} />)}
          </View>
        </ScrollView>
        <Button title='Say Hi' color="yellow" onPress={() => alert('Salom '+this.state.input)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }, fontText: {
    fontSize: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '70%',
    height: 35
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'red',
    width: '30%',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10
  }, error: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: 'red',
    width: '70%',
    height: 35
  }
}) 