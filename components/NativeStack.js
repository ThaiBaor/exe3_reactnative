import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import ListFoodScreen from "../screens/ListFoodScreen";
import CURDFood from "./CRUDFood";
import DetailFood from "./DetailFood"

const FoodStack = createNativeStackNavigator();
function FoodStackScreen(){
    return(
        <FoodStack.Navigator>
            <FoodStack.Screen name="CategoryFoodList" component={CategoryFoodScreen}/>
            <FoodStack.Screen name="FoodList" component={ListFoodScreen}></FoodStack.Screen>
            <FoodStack.Screen name="CURDFood" component={CURDFood}></FoodStack.Screen>
            <FoodStack.Screen name="DetailFood" component={DetailFood}></FoodStack.Screen>
            
        </FoodStack.Navigator>
    )
}
export {FoodStackScreen}