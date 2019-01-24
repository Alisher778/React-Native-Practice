import React, { Component } from 'react';
import { ActivityIndicator,Button, CameraRoll, FlatList, Image, StyleSheet, Text, View } from 'react-native'; 
import axios from 'axios';

export default class Users extends Component {
    state = {users: [{key: 1, id: 2}], err: '', animating: true, imgs:[]};

    componentDidMount = () => { 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                let newUser = [];
                data.map(item => {
                    newUser.push({key: item.name});
                });
                this.setState({users: newUser, animating: false})
            })
            .catch(err => this.setState({err: err.message, animating: false})
            )
    }

    cameraHandler = () => {
        CameraRoll.getPhotos({
                first: 10,
                assetType: "All"
            })
            .then(photo => {
                this.setState({imgs: [...this.state.imgs, photo]})
            })
    }
    render() {
        return(
            <View>
                <Text>{this.state.err}</Text>
                <Button 
                    title="Learn More"
                    color="#841584" 
                    onPress={this.cameraHandler} 
                />
                <Image source={{uri: this.state.imgs[0]}} style={{width: 300, height: 200}} />

                <ActivityIndicator size="large" color="red" animating={this.state.animating}/>
                <FlatList
                    data={this.state.users}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        lineHeight: 45,
        flex: 1
    }
})