import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryFood({scr, name, index, onPress}){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Image style={styles.image} source={scr}/>
            <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        height: 150,
        width: 150,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: CategoryFood.index % 2 != 0 ? 10 : 0,
        marginRight: CategoryFood.index % 2 == 0 ? 0 : 10,
        elevation: 15
    },
    image: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    }
})