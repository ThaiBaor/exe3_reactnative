import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CURDFood from './components/CRUDFood'
import BottomTab from './components/BottomTab';
export default function App() {
  
  return (
     <NavigationContainer>
       <BottomTab></BottomTab>
     </NavigationContainer>
    
  );
}


