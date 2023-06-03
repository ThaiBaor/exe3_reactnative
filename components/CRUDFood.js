import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, FlatList, Text, View, TouchableOpacity, TextInput, Alert,
    Button
} from 'react-native';
import axios from 'axios';

import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');


    let getFood = async () => {
        try {
            const response = await fetch(`${uri}/food`);
            const json = await response.json();
            setData(json.data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const deletefood = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${uri}/delete`, {
                params: {
                    id: id
                }
            }).then(response => {
                alert('da xoa');
                getFood();
            })
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
    }
    const add = async (name, description, price, idCategory, image) => {
        setLoading(true);
        try {
            const response = await axios.post(`${uri}/create`, null, {
                params: {
                    name: name,
                    price: price,
                    description: description,
                    id_category: idCategory,
                    image: image,
                }
            }).then(response => {
                alert('da them');
                getFood();
            })
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
    };
    const updateFood = async (name, description, price, idCategory, image) => {
        setLoading(true);
        try {
            const response = await axios.put(`${uri}/update`, null, {
                params: {
                    id_food: id,
                    name: name,
                    price: price,
                    description: description,
                    id_category: idCategory,
                    image: image,
                }
            }).then(response => {
                alert('da sua');
                getFood();
            })
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
    };

    const navi = () =>{
        navigation.navigate('DetailFood');
    }

    useEffect(() => {
        getFood();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24, paddingTop: 50, height: 100 }}>
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={id}
                placeholder="ID"
                onChangeText={(text) => setId(text)}
            />
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={name}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={description}
                placeholder="Description"
                onChangeText={(text) => setDescription(text)}
            />
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={price}
                placeholder="Price"
                onChangeText={(text) => setPrice(text)}
            />
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={idCategory}
                placeholder="Id catagory"
                onChangeText={(text) => setIdCategory(text)}
            />
            <TextInput
                style={{ borderWidth: 2, padding: 5, margin: 5 }}
                value={image}
                placeholder="Image"
                onChangeText={(text) => setImage(text)}
            />

            <TouchableOpacity onPress={()=>add(name, description, price, idCategory, image)}>
                <Text>Them Mon Hoc</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>updateFood(id,name, description, price, idCategory, image)} ><Text>Sua</Text></TouchableOpacity>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ borderWidth: 2 }} onPress={() => {
                            alert('oke men')
                        }}>
                            <Text key={item.name}>
                                Name: {item.name}
                            </Text>
                            <Text key={item.description}>
                                Description: {item.description}
                            </Text>
                            <Text key={item.price}>
                                Price: {item.price}
                            </Text><Text key={item.id_category}>
                                Category: {item.id_category}
                            </Text><Text key={item.image}>
                                Image: {item.image}
                            </Text>
                            <TouchableOpacity onPress={()=>deletefood(item.id_food)}><Text>Xoa</Text></TouchableOpacity> 
                            <TouchableOpacity onPress={()=>navigation.navigate('DetailFood')}><Text>chon</Text></TouchableOpacity> 
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};


export default App;
