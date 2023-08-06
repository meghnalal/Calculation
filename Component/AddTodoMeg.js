import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, FlatList,Text ,TextInput,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Task from './Task';
import {profile} from './data'


const AddTodoMeg = () =>{
    const[text,setText]=useState('')
    const[taskItems,setTaskItems]=useState([]);
    
    const changeHandler = (val) => {
      setText(val)
      console.log(text)   //console log every time change value 
    
    }
  

    const submitHandler = (text) => {
      console.log(taskItems) //console.log last value
      setTaskItems([...taskItems,text])
      // console.log(TaskItems)
      //setText(null);

    }

    const picture = ({item})=>(
    <View>
    <View>
      <Image source={item.img} style={styles.img}/>  
    </View>
    <Text>{item.heading}</Text>
    </View>
    )

   
    return(
        <View style={styles.input}>
          <TextInput
          style={styles.textinput}
          placeholder={'enter'}
          placeholderTextColor='black'
          keyboardType="numeric"
          value={text}
          onChangeText={changeHandler}
          />
          <Button //ASK BANWO put the button row but rest column
          title="Press me"
          onPress={()=>submitHandler(text)} //calls the function submitHandler 
          />
        
         <FlatList
         horizontal={true}
         data={profile} 
         renderItem={picture}        />
          <ScrollView >
          {
            taskItems.map((item,index) => 
               //item ?  <Text key={index}>{item}</Text>  : null 
              <Task key={item} text={item}/>
            )
          }
          </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
  input:{
      //width:'100%',
      height:'100%',
      marginTop:100,
      backgroundColor:'lightpink',
      flexDirection:'column',
    },
    textinput:{
    borderColor:'black',
    borderRadius:25,
    marginTop:10,
    justifyContent:'center',
    alignSelf:'flex-start',
    borderWidth:1,
    width:'70%',
    height:'5%',
    backgroundColor:'lightblue'
    
    },
    button:{
      width:'25%',
      alignSelf:'flex-end',
      height:'5%',
      
    },
    task:{
      //justifyContent:'center',
     //alignSelf:'flex-start',
     position:'absolute',
     marginTop:10,
      width:'30%',
      height:'50%',
      flexDirection:'column-reverse',
      
      
    },
    scrollView:{
     
      backgroundColor: 'white',
      alignSelf:'flex-start',

    },
    item: {
      //flex: 1,
      borderWidth:1,
      borderRadius:20, //why is this not working 
      borderColor: "black",
      //marginHorizontal: 10,
      marginTop: 10,
      padding: 30,
      backgroundColor: 'lightblue',
      fontSize: 24,
      width: 250 //why if i put percenatage its weird 
    },
    img:{
      width:40,
      height:40
    }
  })
export default AddTodoMeg;
