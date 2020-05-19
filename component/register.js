import React ,{useState } from 'react'
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';



const Register = props =>{
// const [enteredGoal,setEnteredGoal] = useState('')
// const goalInputHandler =(enteredGoal) =>{
//     setEnteredGoal(enteredGoal)
    
//   }

const [userName,setUserName] = useState('')
const userInputHandler = (enteredUser) =>{
  setUserName(enteredUser)
}
const [email,setEmail] = useState('')
const emailInputHandler = (email) =>{
  setEmail(email)
}
const [password,setPassword] = useState('')
const passwordInputHandler = (password) =>{
  setPassword(password)
}
return (  
    <View style={styles.inputContainer}>
      <View>
      <Text> User Name</Text>
      <TextInput placeholder="Enter User" style={styles.input} 
      onChangeText={userInputHandler}
      value={userName}/>
      </View>
        <View>
        <Text>Email</Text>
      <TextInput placeholder="Enter email" style={styles.input} 
      onChangeText={emailInputHandler}
      value={email}/> 
        </View> 
      
      <Text>Password</Text>
      <TextInput placeholder="Enter Password" style={styles.input} 
      onChangeText={passwordInputHandler}
      value={password}/> 
      <Button title="ADD" />
    </View>   
)
}
const styles = StyleSheet.create({
      inputContainer:{
        flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'
      },
      input:{
        width:"80%",borderColor:'black',borderWidth: 1,alignItems: 'center'
      },
})
export default Register