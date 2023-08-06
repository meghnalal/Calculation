// just a button 
import React from "react";
import { View, Button, StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


const ButtonLog = ({navigation}) => {
  return ( 
     <LinearGradient colors = {['white', 'teal']}
     style={styles.gradient}> 
      <View style={styles.screenContainer}>
      <Button title="Log In" 
      onPress={() => 
      navigation.navigate('SignIn')}
      />
    </View>
     </LinearGradient> 
    
    );
};

const styles = StyleSheet.create({
  screenContainer: {
    position:"absolute",
    bottom:300,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",  //alignself is what align the button in middle 
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#FF1493",
  },
  gradient:{
    flex:1,
  },
 
});

export default ButtonLog;