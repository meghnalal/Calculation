import React from "react";
import { View, Button,Dimensions, StyleSheet ,TouchableOpacity,Text } from "react-native";

const Buttoncalculator = ({onPress,text,size,theme}) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    if (size === "double")
    {
        buttonStyles.push(styles.buttonDouble)
    }
    if (theme === "Secondary")
    {
        buttonStyles.push(styles.buttonSecondary)
        textStyles.push(styles.textSecondary)
    }
    else if (theme === "Accent")
    {
        buttonStyles.push(styles.buttonAccent)
        
    }
    return ( 
        <TouchableOpacity
        onPress={onPress}
        style={buttonStyles}> 
        <Text style={textStyles}>{text}</Text>
        </TouchableOpacity> 
    );     
  };
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4;
  const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    text:{
        color: "#fff",
        fontSize: 24,
    },
    buttonDouble:{
        width: screen.width / 2,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },
    buttonSecondary:{
        backgroundColor: "#a6a6a6",
    },
    textSecondary:{
        color: "#060606",
    },
    buttonAccent:{
        backgroundColor: "#ffc107",
    }
  });
  
  export default Buttoncalculator;