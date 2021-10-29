import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ToastAndroid,Text, View, Image, requireNativeComponent, KeyboardAvoidingView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tab';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen}
})

defaulNavigationOption : ({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.route.routeName
    if (routeName === 'WriteStory'){
      return(
        <Image
        source = {require('./assets/write.png')}
        style = {{width:40, height:40}}/>
        ToastAndroid.show(transactionMessage, ToastAndroid.SHORT);
      )
    }
    else if (routeName === 'ReadStory'){
      return(
      <Image
      source = {requireNativeComponent('./assets/read.png')}
      style = {{width:40, height:40}}/>
      )
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
