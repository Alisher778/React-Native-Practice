import React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return(
      <View>
        <Text style={styles.text}>Hello React Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
