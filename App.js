import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab></BottomTab>
    </NavigationContainer>
  );
}


