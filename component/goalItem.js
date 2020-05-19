import React ,{useState } from 'react'
import { StyleSheet, Text, View ,Button,TextInput,Touchable} from 'react-native';

const GoalItem = props =>{
    return(
        <Touchable>
             <View style={styles.list}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </Touchable>
       
    )
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
export default GoalItem