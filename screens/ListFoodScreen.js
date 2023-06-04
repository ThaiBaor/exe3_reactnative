import React from "react";
import Food from "../components/Food";
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export default function ListFood({ navigation, id_category }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`${uri}/food`);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <View>
            {isLoading ? (<ActivityIndicator />) : (
            <FlatList data={data} renderItem={({ item }) => <Food item={item}></Food>}>
            </FlatList>)}
        </View>

    )
}
