import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import axios from 'axios';
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;
import FoodInCart from '../components/FoodInCart';
export default function CartScreen() {
    const [selectedId, setSelectedId] = useState(0);
    const [data, setData] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    let getCart = async () => {
        try {
          const response = await fetch(`${uri}/cartuser?id_user=1`);
          const json = await response.json();
          setData(json.data); 
        } catch (error) {
          console.error(error);
        }
      };
      const clearCart = async (id_user) => {
        try {
            const response = await axios.delete(`${uri}/clearcart`, {
                params: {
                    id_user: id_user
                }
            }).then(response => {
                alert('da xoa'); 
            })
        }
        catch (error) {
            alert(error);
        }
    }
    const getSubTotal=()=>{
        var result=0;
        data.forEach(element => {
            result +=element.price;
        });
        return setSubTotal(result);
    };
    const getTotal=()=>{
        return setTotal(subTotal*(100-discount)/100);
    };
    const remove=(name)=>{
        let newData = data
        for (var i=0;i<newData.length;++i){
            if (newData[i].name===name){
                newData.splice(i,1);
                break;
            }
        }
        setData(newData);
        alert("remove");
    }
    const clear=()=>{
        if (data.length>0){
            let newData=data;
            newData.splice(0,newData.length);
            setData(newData);
            setTotal(0);
            setSubTotal(0);
            alert("clear");
        }
        else{
            alert("Empty")
        }
    }
    useEffect(() => {
        getCart();
        getSubTotal();
        getTotal();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList showsVerticalScrollIndicator={false} data={data} getCart={getCart()} extraData={selectedId} renderItem={({ item }) => <FoodInCart item={item} ></FoodInCart>}>
                </FlatList>
            </View>
            <View style={styles.invoice_info_container}>
                <Text style={styles.invoice_info_text}>Sub Total: {subTotal}</Text>
                <Text style={styles.invoice_info_text}>Discount: {discount}%</Text>
                <Text style={styles.invoice_info_text}>Total: {total}</Text>
            </View>
            <View style={styles.action_bar}>
                <TouchableOpacity>
                    <Text style={styles.pay}>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>clearCart(1)}>
                    <Text style={styles.clear}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    action_bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2C1',
        flex: 1
    },
    list: {
        flex: 8
    },
    invoice_info_container: {
        backgroundColor: '#E3F2C1',
        flex: 2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    invoice_info_text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50
    },
    pay: {
        color: '#B799FF',
        fontSize: 25,
        backgroundColor: '#C4DFDF',
        width: 120,
        textAlign: 'center',
        borderRadius: 20,
        fontWeight: 'bold',
        marginRight: 10
    },
    clear: {
        color: '#DB005B',
        fontSize: 25,
        backgroundColor: '#C4DFDF',
        width: 120,
        textAlign: 'center',
        borderRadius: 20,
        fontWeight: 'bold'
    }
})