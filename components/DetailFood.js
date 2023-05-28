import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <View>
      <View style={styles.container1}>
        <Text style={styles.toptitle}>Food Detail</Text>
      </View>
      <Image style={styles.imageDetail} source={require('../assets/images/burger.jpg')} />
      <View style={{ alignItems: 'center', }}>
        <Text style={styles.nameDetail}>Burger</Text>
        <Text style={styles.description}>Dish of Italian origin consisting of a flattened disk of bread dough</Text>
        <Text style={styles.nameDetail}>Price: 10$</Text>
      </View>
      <View>
        <Text style={styles.note}>Special Instruction</Text>
        <TextInput
          style={styles.textInfo}
          placeholder='Enter more information here...'></TextInput>
        <Text>------------------------------------------------------------------------------------------------------</Text>
      </View>
      <View style={styles.footdetail}>
        <Text style={styles.note}>Number of food</Text>
        <TextInput
          style={styles.textInfo}
          placeholder='Enter number of food here...'></TextInput>
      </View>
      <View style={styles.footdetail2}>
        <TouchableOpacity
      style={styles.addtocart}><Text style={{fontWeight:'bold'}}>ADD TO CART</Text></TouchableOpacity>
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
    borderRadius:10,
  },

  footdetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  footdetail2:{
    alignItems: 'center',
    fontWeight:'bold',
  },
  addtocart:{
    margin:25,
    padding: 20,
    backgroundColor: 'red',
    borderRadius:10,
    fontSize: 20,
    
  },
  nhom: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  hoten: {
    textAlign: 'center',
    fontWeight: 'bold',
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
  listfood: {
    width: 155,
    height: 31,
    marginLeft: 10,

    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 44,
    color: ' #000000',
  },
  hinhmonan: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 25,
  },

  nutadd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30 - 100,
    width: 70,
    height: 40,
    marginLeft: 75,
    marginTop: 5,
    borderRadius: 20,
    background: 'red',
    color: '#fff',
  },
  nutsua: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 70,
    height: 40,
    borderRadius: 20,
    background: 'red',
    color: '#fff',
    marginBottom: 10,
  },

  nutdelete: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 70,
    height: 40,
    borderRadius: 20,
    background: 'red',
    color: '#fff',
  },

  tenmonan: {
    marginTop: 30,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
  },
  gia: {
    marginTop: 10,
    marginLeft: 10,
    width: 155,
    height: 31,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
  },
});



