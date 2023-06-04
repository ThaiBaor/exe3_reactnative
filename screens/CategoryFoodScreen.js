import React from "react";
import { FlatList } from "react-native";
import CategoryFood from "../components/CatergoryFood";

export default function CategoryFoodScreen({navigation}) {

    var foodCategories = [require('../assets/images/salad1.jpg'), require('../assets/images/soup.jpg'), require('../assets/images/seafood.jpg'), require('../assets/images/dessert.jpg'), require('../assets/images/steak.jpg'), require('../assets/images/pizza.jpg'), require('../assets/images/salad.jpg'), require('../assets/images/burger.jpg')]
    return (
        
            <FlatList           
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={foodCategories}
                renderItem={({ item, index }) =>
                    (<CategoryFood scr={item} name={index} index={index} onPress={()=>navigation.navigate('Food List')}></CategoryFood>)
                }
            />       
    )
}
