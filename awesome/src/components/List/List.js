import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const list = (props) => {
    return(
        <TouchableHighlight onPress={() => alert('Hey '+props.raqam)} >
            <View style={styles.list}>
                <Text style={styles.margin}>{props.name} {props.raqam}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
   list: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 5
    }, margin: {
        width: '100%',
        backgroundColor: '#eee',
        fontSize: 20,
        textAlign: 'center',
        padding: 6
    }
});

export default list;