import { StyleSheet, View } from "react-native";

const Rowstyle = ({children}) => {
    return ( 
        <View style={styles.container}>{children}</View>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
      },
   
  });
  
  export default Rowstyle;
