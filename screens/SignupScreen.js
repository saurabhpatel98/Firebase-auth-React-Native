import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView,Image,TouchableOpacity,Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input ,Button} from 'native-base';
import * as firebase from 'firebase'

export default class SignupScreen extends React.Component{
  state={
    email:"",
    Password:""
  }

  createThreeButtonAlert = () =>{
    console.log("alert called") 
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
userSignUp(email,password){
  console.log(this.state);
  console.log("userSignUp called")
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.Password)
                 .then(()=>{this.props.navigation.replace("Home")})
                 .catch((error)=>{
                                              // Handle Errors here.
                                              var errorCode = error.code;
                                              var errorMessage = error.message;
                                              console.log("error called")
                                              // [START_EXCLUDE]
                                              if(true){
                                                console.log("if called")
                                                Alert.alert(
                                                  "Alert Title",
                                                  "My Alert Msg",
                                                  [
                                                    {
                                                      text: "Ask me later",
                                                      onPress: () => console.log("Ask me later pressed")
                                                    },
                                                    {
                                                      text: "Cancel",
                                                      onPress: () => console.log("Cancel Pressed"),
                                                      style: "cancel"
                                                    },
                                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                                  ],
                                                  { cancelable: false }
                                                );
                                                
                                                }
                                              else{

                                                console.log("Error called")
                                             
                                                console.log(error);
                                              }
                                              
                                              // [END_EXCLUDE]
                                            });
                                            // [END createwithemail]
                                          }
        

    render(){
      console.log(" SignUpScreen Render called")
      console.log(firebase.auth)
  return (
    <KeyboardAvoidingView behavior="position">
    <Container style={styles.container}>
    <Header style={{backgroundColor:'#fff'}} ><Image source={require('../assets/Healthub.png')} style={{width:250,height:250}}/>
    </Header>
    <Content>
      <Form style={{paddingTop:150}}>
        <Item>
          <Input placeholder="Email Id" value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}}/>
        </Item>
        <Item last>
          <Input placeholder="Password"  value={this.state.Password} secureTextEntry={true} onChangeText={(text)=>{this.setState({Password:text})}}/>
        </Item>
        <Button full rounded danger style={{margin:10,justifyContent: 'center'}}>
            <Text style={{fontSize:22,color:"white"}} onPress={()=>{this.userSignUp(this.state.email,this.state.Password)}}>SignUp</Text>
          </Button>
        
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("LogIn")}><Text style={{textAlign:'center'}}>Already have Account!</Text></TouchableOpacity>
      </Form>
    </Content>
    
  </Container>
  </KeyboardAvoidingView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
