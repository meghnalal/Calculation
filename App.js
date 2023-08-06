
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Button from './Component/Button';
import React, { useState } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodoMeg from './Component/AddTodoMeg'
import calculator from './Component/Calculator';



const Stack = createNativeStackNavigator(); 

const MyStack = () => {
  return (
      
        <NavigationContainer >
         <Stack.Navigator screenOptions={{headerTransparent: true}}
         initialRouteName="ButtonLogin">
          <Stack.Screen
                name="Home"component={Button}/>
          <Stack.Screen 
                name="SignIn" component={calculator} />
          <Stack.Screen
                name="MainPage" component={AddTodoMeg}/>
          <Stack.Screen
                name="Income" component={Button}/>
         </Stack.Navigator>
        </NavigationContainer>
    
  );
};


  function App() {
   return (
      <NavigationContainer>
        <Tab.Navigator tabBarOption ={{
          style :{
            backgroundColor:'transparent',
            borderTopWidth:0,
            position:'absolute',
          }
        }}> 
          <Tab.Screen name="Home" component= {Button}/>
       </Tab.Navigator>
     </NavigationContainer>
    );
  }; 


// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
      gradient:{
        flex:1,
      },
    });

export default MyStack;