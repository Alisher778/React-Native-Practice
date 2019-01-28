import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const list = (props) => {
    return(
        <View style={styles.list}>
            <Text style={styles.margin}>Name: {props.name}</Text>
            <Text style={styles.margin}>Email: {props.email}</Text>
        </View>
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
        fontSize: 20
    }
});

export default list;