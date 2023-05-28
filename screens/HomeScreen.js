
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import RecommendedFood from '../components/RecommendedFood';
import FoodCategoryBanner from '../components/FoodCategoryBanner';
import RecommendedmMeal from '../components/RecommendedMeal';
export default function HomeScreen() {
    const navigation = useNavigation();
    var recommendedFoods = [require('../assets/images/steak1.jpg'), require('../assets/images/seafood1.jpg'), require('../assets/images/salad.jpg'), require('../assets/images/sasimi.jpg')];
    var foodCategories = [require('../assets/images/steak.jpg'), require('../assets/images/seafood.jpg'), require('../assets/images/salad1.jpg'), require('../assets/images/burger.jpg'), require('../assets/images/dessert.jpg'), require('../assets/images/pizza.jpg')];
    var recommendedMeals = [require('../assets/images/breakfast.png'), require('../assets/images/lunch.jpg'), require('../assets/images/dinner.jpg')];
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.foodSession}>
                <Text style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>Recommended</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={recommendedFoods}
                    renderItem={({ item }) => (<RecommendedFood scr={item}></RecommendedFood>)}>
                </FlatList>
            </View>
            <View style={styles.foodSession}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        marginRight: 10
                    }}>Food Catogories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CategoryFood')}>
                        <Image source={require('../assets/icons/more_icon.png')} style={{ height: 30, width: 30 }}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={foodCategories}
                    renderItem={({ item }) => (<FoodCategoryBanner scr={item}></FoodCategoryBanner>)}>
                </FlatList>
            </View>
            <View style={styles.foodSession}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    alignSelf: 'center'
                }}>DON'T KNOW WHAT TO EAT?</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={recommendedMeals}
                    renderItem={({ item }) => (<RecommendedmMeal scr={item}></RecommendedmMeal>)}>
                </FlatList>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FDF4F5'

    },
    headerSession: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 10,
    },
    foodSession: {
        marginTop: 7,
        marginBottom: 15,
    }
});
