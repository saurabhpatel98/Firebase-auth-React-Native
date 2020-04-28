import React from 'react';
import {StyleSheet, Text,View,ActivityIndicator} from 'react-native';
//import { Container, Header, Content, Form, Item, Input ,Button} from 'native-base';
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component{
  
componentDidMount(){
  this.unsubscribeAuth =firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      this.props.navigation.navigate("Home")
      
    } else {
      this.props.navigation.navigate("LogIn")
    }
  });
}
componentWillUnmount(){
  this.unsubscribeAuth();
}
render(){
  console.log(" LoadingScreen Render called")
  console.log(firebase.auth)
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="blue"/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
