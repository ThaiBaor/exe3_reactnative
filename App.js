import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import DetailFood from './components/DetailFood';
export default function App() {
  
  return (
     <NavigationContainer>
      <BottomTab></BottomTab>
     </NavigationContainer>
    
  );
}


