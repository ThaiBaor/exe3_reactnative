import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CURDFood from './components/CRUDFood'
import BottomTab from './components/BottomTab';
import DetailFood from './components/DetailFood';
export default function App() {
  return (
    <NavigationContainer>
     <DetailFood></DetailFood>
    </NavigationContainer>
  );
}


