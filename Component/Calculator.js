import React, { Component } from "react";
import  { useState,useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Buttoncalculator from "./Buttoncalculator";
import Rowstyle from "./Rowstyle";

const calculator = () => {
    const [currentValue, setCurrentValue] = useState("");
    const [previusValue, setpreviusValue] = useState("0");
    const [operation, setoperation] = useState("");
    const [equal, setequal] = useState("");

    const handleButtonPress = (value) => {
      if (previusValue !== "0"){
        setCurrentValue("0")
        //console.log(currentValue)

      }
      else{
        setCurrentValue(value)
        console.log(currentValue)
        console.log(previusValue)
      }
      if (equal === "=" || operation) {
        setCurrentValue(currentValue + value);
        setequal("");
        //setoperation("");
        
      } else {
        if (currentValue.length < 8) {
          if (currentValue === "0" || equal === "=" ) {
            setCurrentValue(`${value}`);
          } else {
            setCurrentValue(currentValue + value);
          }
        }
      }
    };

    const handleButtonclear = (value) => {
        setCurrentValue("0")
        setpreviusValue("0")
      };
    const handlelastvalue = (value) => {
        setpreviusValue(currentValue)
        setCurrentValue("");
        setoperation(value)
      }
      const handleOperationPress = (value) => {
        //console.log(previusValue)
        if (previusValue != "0"){
          //console.log('yes')
          handleoperation()
        }else { 
          setpreviusValue(currentValue)
          setCurrentValue("");
          //console.log('no')
          setoperation(value)
        }
      };
      
      const handleoperation = () => {
        let result = 0;
        switch(operation){
          case '+':
            result = parseInt(previusValue) + parseInt(currentValue);
            break;
          case '-':
            result = parseInt(previusValue) - parseInt(currentValue);
            break;
          case 'x':
            result = parseInt(previusValue) * parseInt(currentValue);
            break;
          case '/':
            result = parseInt(previusValue) / parseInt(currentValue);
            break;
          case '%':
            result = (parseInt(previusValue)/100) * parseInt(currentValue);
            break;
          default:
            break;
        }
        setCurrentValue(result.toString());
        setpreviusValue(result.toString());
        return result;
      };
      
    return ( 
        <View style={styles.container}>
        <Text style={styles.display}>{currentValue}</Text>
        <Rowstyle>
        <Buttoncalculator text="C" theme="Secondary" onPress={() => handleButtonclear()}  />
        <Buttoncalculator text="+/-"theme="Secondary" onPress={() => handleButtonclear('+/-')}/>
        <Buttoncalculator text="%" theme="Secondary" onPress={() => handlelastvalue('%')}/>
        <Buttoncalculator text="/" theme="Accent" onPress={() => handlelastvalue('/')}/>
        </Rowstyle>
        <Rowstyle>
        <Buttoncalculator text="7" onPress={() => handleButtonPress(7)} />
        <Buttoncalculator text="8" onPress={() => handleButtonPress(8)} />
        <Buttoncalculator text="9" onPress={() => handleButtonPress(9)} />
        <Buttoncalculator text="x" theme="Accent" onPress={() => handleOperationPress('x')}/>
        </Rowstyle>
        <Rowstyle>
        <Buttoncalculator text="4" onPress={() => handleButtonPress(4)} />
        <Buttoncalculator text="5" onPress={() => handleButtonPress(5)} />
        <Buttoncalculator text="6" onPress={() => handleButtonPress(6)} />
        <Buttoncalculator text="-" theme="Accent" onPress={() => handleOperationPress('-')}/>
        </Rowstyle>
        <Rowstyle>
        <Buttoncalculator text="1" onPress={() => handleButtonPress(1)} />
        <Buttoncalculator text="2" onPress={() => handleButtonPress(2)} />
        <Buttoncalculator text="3" onPress={() => handleButtonPress(3)} />
        <Buttoncalculator text="+" theme="Accent" onPress={() => handlelastvalue('+')}/>
        </Rowstyle>
        <Rowstyle>
        <Buttoncalculator text="0" size = "double" onPress={() => handleButtonPress(0)}/>
        <Buttoncalculator text="."  />
        <Buttoncalculator text="=" theme="Accent" onPress={() => {handleoperation(); setequal("=")}} />
        </Rowstyle>
       </View>
       
      );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end",
      },
    gradient:{
        flex:1,
    },
    display:{
        color: "#fff",
        fontSize: 80,
        textAlign: "right",
        margin: 10,
    }
  });
  
  export default calculator;