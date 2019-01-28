import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const list = (props) => {
    return (
        <View>
            <Text style={styles.font}>{this.props.children}</Text>
        /</View>
    );
}

const styles = StyleSheet.create({
    font: {
        fontSize: 30,
        color: 'torque',
        textAlign: 'center'
    }
});

export default list;