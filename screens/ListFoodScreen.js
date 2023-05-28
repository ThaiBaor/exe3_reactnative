import React from "react";
import Food from "../components/Food";
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";


export default function ListFood({ navigation, id_category }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            alert("Fetching");
            const response = await fetch('http://192.168.2.23:3000/food');
            const json = await response.json();
            setData(json.data);
            alert("Complete fetching")
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    /*var listFood = [
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
    ];*/
    return (
        <View>
            {isLoading ? (<ActivityIndicator />) : (
            <FlatList data={data} renderItem={({ item }) => <Food item={item}></Food>}>
            </FlatList>)}
        </View>

    )
}
