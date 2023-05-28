import React from "react";
import Food from "../components/Food";
import {Text, FlatList } from "react-native";


export default function ListFood({navigation, id_category}){
    
    var listFood = [
        {
            name: "Chicken burger",
            price: "70000",
            image: require('../assets/images/burger.jpg')
        },
        {
            name: "Fish burger",
            price: "60000",
            image: require('../assets/images/fish_burger.jpg')
        },
        {
            name: "Grilled onion burger",
            price: "40000",
            image: require('../assets/images/onion_burger.jpg')
        },
        {
            name: "Cheese burger",
            price: "45000",
            image: require('../assets/images/cheese_burger.jpg')
        },
        {
            name: "BBQ bacon burger",
            price: "80000",
            image: require('../assets/images/bbq_burger.jpg')
        },
    ];
    return(
        <FlatList data={listFood} renderItem={({item})=><Food item={item}></Food>}>
        </FlatList>
    )
}