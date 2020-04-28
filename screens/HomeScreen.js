import React from 'react';
import { StyleSheet, Text,View, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input ,Button} from 'native-base';
import * as firebase from 'firebase'
export default class LoginScreen extends React.Component{
  state={
      emial:"",

  }
  componentDidMount(){

      this.unsubscribeAuth =firebase.auth().onAuthStateChanged(user=>{

        if(user){
          this.setState({email:user.email})
        }
        else{
          this.props.navigation.replace("LogIn")
        }
      })
  }

  componentWillUnmount(){
    this.unsubscribeAuth()
  }

  userSignOut(){
    firebase.auth().signOut().catch((error)=>{Alert.alert(error.message)});
  }
    render(){
      console.log(" HomeScreen Render called")
      console.log(firebase.auth)
  return (
   <View style={styles.container}>
       <Text style={{textAlign:'center'}}>You are logged in as {this.state.email}</Text>
       <Button full rounded danger style={{margin:10,justifyContent: 'center'}}>
    <Text style={{fontSize:22,color:"white"}} onPress={()=>{this.userSignOut()}}>LogOut</Text>
  </Button>
   </View>
   
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent:'center'
  },
});
