
import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Constants from "expo-constants";
import axios from 'axios';
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;
export default function FoodInCart({item, getCart}) {
    const [qty, setQty] = useState(1);
    const deleteCart = async (id) => {
        try {
            const response = await axios.delete(`${uri}/deletecart`, {
                params: {
                    id_food: id
                }
            }).then(response => {
                alert('da xoa'); 
            })
        }
        catch (error) {
            alert(error);
        }
    }
    const increase=()=>{
        if (qty < 99){
            setQty(qty+1);
        }
    }
    const decrease = ()=>{
        if (qty > 1){
            setQty(qty-1);
        }
    }
    const input = (qty) =>{
        if (qty !== null){
            setQty(qty);
        }
        else{
            setQty(1);
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.container_content_left} source={item.image}></Image>
            <View style={styles.container_content_right}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price}</Text>
                <Text style={styles.text}>{item.numberoffood}</Text>
                <View style={styles.interact_bar}>
                    {/* <TouchableOpacity onPress={increase}>
                        <Image style={styles.plus_icon} source={require('../assets/icons/plus.png')}></Image>
                    </TouchableOpacity> */}
                    {/* <TextInput onChangeText={({text})=>input(text)} keyboardType="numeric" maxLength={2}  onEndEditing={setQty} editable={false}>{qty}</TextInput> */}
                    {/* <TouchableOpacity onPress={decrease}>
                        <Image style={styles.minus_icon} source={require('../assets/icons/minus.png')}></Image>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={()=>deleteCart(item.id_food)}>
                        <Image style={styles.close_icon} source={require('../assets/icons/close.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 110,
        alignItems: 'center',
        marginLeft: 50

    },
    container_content_left:{
        height: 100,
        width: 100,
        borderRadius: 20

    },
    container_content_right:{
        flexDirection: 'column',
    },
    interact_bar:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    minus_icon:{
        height: 20,
        width: 20,
        backgroundColor: 'grey',
        borderRadius: 40,
        marginLeft: 15
    },
    plus_icon:{
        marginLeft: 10,
        height: 20,
        width: 20,
        marginRight: 15,
        backgroundColor: 'green',
        borderRadius: 40
    },
    close_icon:{
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 40,
        marginLeft: 50
    },
    text:{
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 10
    }
})