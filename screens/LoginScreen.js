import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView,Image,TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input ,Button} from 'native-base';
import * as firebase from 'firebase'
export default class LoginScreen extends React.Component{
  state={
    email:"",
    Password:""
  }

  userSignin(email,Password){
    firebase.auth().signInWithEmailAndPassword(email, Password)
                  .then(()=>{
                    this.props.navigation.replace("Home")
                  })
                  .catch(error=>{Alert.alert(error.message)});

  }
    render(){
      console.log(" LoginScreen Render called")
      console.log(firebase.auth)
  return (
    
    <KeyboardAvoidingView behavior="position">
      
    <Container style={styles.container}>
    <Header style={{backgroundColor:'#fff',height:400,justifyContent:'center',}} ><Image source={require('../assets/Healthub.png')} style={{width:400,height:400}}/>
    </Header>
    <Content>
      <Form style={{paddingTop:5}}>
        <Item>
          <Input placeholder="Email Id" value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}}/>
        </Item>
        <Item last>
          <Input placeholder="Password" value={this.state.Password} secureTextEntry={true} onChangeText={(text)=>{this.setState({Password:text})}}/>
        </Item>
        <Button full rounded danger style={{margin:10,justifyContent: 'center'}} onPress={()=>{this.userSignin(this.state.email,this.state.Password)}}>
            <Text style={{fontSize:22,color:"white"}}>LogIn</Text>
          </Button>
        
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignUp")}><Text style={{textAlign:'center'}}>Don't have an account?</Text></TouchableOpacity>
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
    justifyContent: 'center',
  },
});
