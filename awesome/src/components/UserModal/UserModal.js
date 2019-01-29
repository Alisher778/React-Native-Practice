import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class UserModal extends Component {
    state = {visible: false}
    closeHandler = (visibility) => {
        this.setState({visible: visibility});
    }
    render() {
        return (
            <View style={StyleSheet.centered}>
                <Modal
                    visible={this.state.visible}
                    animationType="slide"
                    onRequestClose={() => this.closeHandler(false)}
                    presentationStyle="fullScreen"
                    style={styles.centered}
                >
                    <View style={styles.centered}>
                        <Text>Hello Modal</Text>
                        <TouchableHighlight style={styles.button} onPress={() => this.closeHandler(false)}>
                            <View>
                                <Text style={{color: '#fff'}}>Close</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </Modal>
                <TouchableHighlight style={styles.button} onPress={() => this.closeHandler(true)}>
                    <View>
                        <Text style={{color: '#fff'}}>Show</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centered: {
        justifyContent: "center", 
        alignItems: "center",
        flex: 1
    },
    button: {
        backgroundColor: "#005068",
        borderColor: "#005068",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        height: 30,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30
    }
})
export default UserModal;
