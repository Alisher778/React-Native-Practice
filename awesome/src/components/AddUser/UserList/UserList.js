import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import img from '../../../assets/img/imac.png';
const userList = (props) => {
    return(
        <TouchableHighlight onPress={() => props.del(props.id)}>
            <View style={styles.container}>
                <Image source={img} resizeMethod="resize" style={styles.image} />
                <Text style={styles.font}>{props.name}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6f0f2', 
        padding: 7, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 4
    },
    font: {
        fontSize: 18,
    },
    image: {
        width: 70, 
        height: 70, 
        marginRight: 10
    }
})
export default userList;