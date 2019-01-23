import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native'; 
import axios from 'axios';

export default class Users extends Component {
    state = {users: [{key: 1, id: 2}], err: ''};

    componentDidMount = () => { 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                let newUser = [];
                data.map(item => {
                    newUser.push({key: item.name});
                });
                this.setState({users: newUser})
            })
            .catch(err => this.setState({err: err.message})
            )
    }
    render() {
        return(
            <View>
                <Text>{this.state.err}</Text>
                <FlatList
          data={this.state.users}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
            </View>
        );
    }
}