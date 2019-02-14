import React, { Component } from 'react';
import { Button, FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import UserList from './UserList/UserList';

export default class AddUser extends Component {
    state= {user: [{key: '1', value: 'User 1'}]}

    userHandler = (name) => {
        this.setState(prevState => {
            return {
                user: prevState.user.concat({key: Math.random().toString(), value: this.state.input})
            }
        })

    }

    removeHandler = (id) => {
        return this.setState({user: this.state.user.filter(user => user.key !== id)})
    }

    userRenderingHandler = ({item}) => {
        return <UserList name={item.value} id={item.key} del={this.removeHandler}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="User Name"
                    style={styles.border} 
                    onChangeText={(val) => this.setState({input: val})}
                />
                <Button 
                    color="#005068"
                    title="Add User"
                    style={{backgroundColor: "#005068"}}
                    onPress={this.userHandler}
                />
                <FlatList
                    data={this.state.user}
                    renderItem={this.userRenderingHandler}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 30,
        marginBottom: 50,
        padding: 5,
    },
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        height: 40,
        width: '100%',
        padding: 10
    }
})
