import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView,FlatList} from 'react-native';
import GoalInput from './component/register'
import Register from './component/register'


export default function App() {
 const [courseGoal,setCourseGoal] = useState([])


 const addGoalHandler =goalTitle=>{
   console.log(goalTitle)
   setCourseGoal(currentGoals=>[
     ...currentGoals,
     {key: Math.random().toString(),value: goalTitle}])
 }
  return (
    <View  style={styles.screen}>
      <Register/>
      {/* <GoalInput onAddGoal = {addGoalHandler}/>
      <FlatList data={courseGoal} renderItem={itemData=>(
        <View style={styles.listItem}><GoalItem title = {itemData.item.value}/></View>
      )} /> */}
   </View>
  );
}


const styles=StyleSheet.create({
  screen:{
    padding:50
  },
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    marginVertical:10
  }
})