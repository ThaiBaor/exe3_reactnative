import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import ListFoodScreen from "../screens/ListFoodScreen";
const FoodStack = createNativeStackNavigator();
function FoodStackScreen(){
    return(
        <FoodStack.Navigator>
            <FoodStack.Screen name="CategoryFoodList" component={CategoryFoodScreen}/>
            <FoodStack.Screen name="FoodList" component={ListFoodScreen}></FoodStack.Screen>
        </FoodStack.Navigator>
    )
}
export {FoodStackScreen}