import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import ListFoodScreen from "../screens/ListFoodScreen";
import CURDFood from "./CRUDFood";
import DetailFood from "./DetailFood"
import CartScreen from "../screens/CartScreen";


const FoodStack = createNativeStackNavigator();
function FoodStackScreen(){
    return(
        <FoodStack.Navigator>
            <FoodStack.Screen name="Category Food List" component={CategoryFoodScreen}/>
            <FoodStack.Screen name="Food List" component={ListFoodScreen}></FoodStack.Screen>
            <FoodStack.Screen name="CURD Food" component={CURDFood}></FoodStack.Screen>
            <FoodStack.Screen name="Detail Food" component={DetailFood}></FoodStack.Screen>
        </FoodStack.Navigator>
    )
}
export {FoodStackScreen}