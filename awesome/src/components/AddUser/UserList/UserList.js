import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const userList = (props) => {
    return(
        <TouchableHighlight onPress={() => props.del(props.id)}>
            <View>
                <Text style={styles.font}>{props.name}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    font: {
        fontSize: 18,
        color: 'red'
    }
})
export default userList;