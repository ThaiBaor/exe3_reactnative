import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login";
import SinginScreen from "../screens/Signin"
import ForgotPassScreen from "../screens/ForgotPass";


const AuthStack = createNativeStackNavigator();
function AuthStackScreen(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
            <AuthStack.Screen name="Sign Up" component={SinginScreen}></AuthStack.Screen>
            <AuthStack.Screen name="Forgot Password" component={ForgotPassScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
export {AuthStackScreen}