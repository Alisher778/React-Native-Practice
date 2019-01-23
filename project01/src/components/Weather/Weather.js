import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Weather extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.list} >{this.props.id}. {this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        lineHeight: 40,
        fontSize: 18,
        borderColor: "#000",
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        padding: 10
      }
})