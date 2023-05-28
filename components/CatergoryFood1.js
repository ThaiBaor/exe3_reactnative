import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryFood({item, index, onPress}){
    
    return(
        <TouchableOpacity>
  <View style={styles.container}>
  
  <View style={styles.wrapContainer}>
  <View style={styles.textContainer}>
  <Text style={styles.text}>{item.name}</Text>
  <Text style={styles.text}>{index}</Text></View>
  </View>
  <Image source={item.scr} style={styles.img}/>
  </View>
  </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    img:{
      
      height: 60,
      width: 60,
      borderRadius: 40,
      position: 'absolute',
      left: 50
    },
    wrapContainer:{
      height: 90,
      backgroundColor: 'grey',
      width: 200,
      marginLeft: 50,
      justifyContent: 'center',
      borderRadius: 20,
    },
    textContainer:{
      flex: 1,
      justifyContent: 'center'
    },
    container:{
      height: 200,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      marginLeft: 20,
      justifyContent:'center'
    }
  })