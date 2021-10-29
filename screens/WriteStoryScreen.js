import React from 'react';
import {StyleSheet, Text, ToastAndroid,TouchableOpacity, View,KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component(){
    render(){
        return(
            <View style = {StyleSheet.container}>
                <KeyboardAvoidingView>
                    <Header> Write Story </Header>
                    <TextInput onChangeText={}>Title Of Story</TextInput>
                    <TextInput onChangeText={}>Author of the Story</TextInput>
                    <TextInput multiline = {true} onChangeText={}>Write the Story</TextInput>
                </KeyboardAvoidingView>
                <TouchableOpacity
                style={styles.submitButton} 
                onPress={this.submitStory}
                >Submit Story</TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})