import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;
import { NavigationContainer } from '@react-navigation/native';

const DetailFood = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [id_food, setIdFood] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [idCategory, setIdCategory] = useState('');
  const [image, setImage] = useState('');
  const [note, setNote] = useState('');
  const [numberoffood, setNumberOfFood] = useState('');

  let getFood = async () => {
    try {
      const response = await fetch(`${uri}/getfoodbyid?id_food=1`);
      const json = await response.json();
      setData(json.data);
      setIdFood = data[0].id_food;
      setName = data[0].name;
      setDescription = data[0].description;
      setPrice = data[0].price;
      setIdCategory = data[0].id_category;
      setImage = data[0].image;
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const add = async (id_user, id_food, name, description, price, idCategory, image, note, numberoffood) => {
    setLoading(true);
    try {
      const response = await axios.post(`${uri}/createcart`, null, {
        params: {
          id_user: id_user,
          id_food: id_food,
          name: name,
          price: price,
          description: description,
          id_category: idCategory,
          image: image,
          note: note,
          numberoffood: numberoffood,
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
  useEffect(() => {
    getFood();
    console.log(data);
  }, []);
  return (
    <View>
      <View style={styles.container1}>
        <Text style={styles.toptitle}>Food Detail</Text>
      </View>
      <Image style={styles.imageDetail} source={require('../assets/images/burger.jpg')} />
      <View style={{ alignItems: 'center', }}>
        <Text style={styles.nameDetail}></Text>
        <Text style={styles.description}></Text>
        <Text style={styles.nameDetail}></Text>
      </View>
      <View>
        <Text style={styles.note}>Special Instruction</Text>
        <TextInput
          style={styles.textInfo}
          value={note}
          onChangeText={(text) => setNote(text)}
          placeholder='Enter more information here...'></TextInput>
        <Text>------------------------------------------------------------------------------------------------------</Text>
      </View>
      <View style={styles.footdetail}>
        <Text style={styles.note}>Number of food</Text>
        <TextInput
          style={styles.textInfo}
          value={numberoffood}
          onChangeText={(text) => setNumberOfFood(text)}
          placeholder='Enter number of food here...'></TextInput>
      </View>
      <View style={styles.footdetail2}>
        <TouchableOpacity
        onPress={()=>add(1,id_food,name,description,price,idCategory,image, note, numberoffood)}
          style={styles.addtocart}><Text style={{ fontWeight: 'bold' }}>ADD TO CART</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container1: {
    justifyContent: 'flex-start',
    background: '#ED0A0A',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20,
    padding: 5,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  container4: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
  },
  container5: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    marginLeft: -50,
    marginTop: 15,
  },
  imageDetail: {
    height: 200,
    width: '100%',
  },
  nameDetail: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    margin: 5,
    textAlign: 'center',
  },
  note: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },

  textInfo: {
    borderWidth: 2,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },

  footdetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  footdetail2: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  addtocart: {
    margin: 25,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    fontSize: 20,

  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  toptitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
  },
});

export default DetailFood;




