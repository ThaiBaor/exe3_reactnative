import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import FoodInCart from '../components/FoodInCart';
export default function CartScreen() {
    const [selectedId, setSelectedId] = useState(0);
    const [data, setData] = useState([{
        name: "Chicken burger",
        price: 70000,
        image: require('../assets/images/burger.jpg')
    },
    {
        name: "Fish burger",
        price: 60000,
        image: require('../assets/images/fish_burger.jpg')
    },
    {
        name: "Grilled onion burger",
        price: 40000,
        image: require('../assets/images/onion_burger.jpg')
    },
    {
        name: "Cheese burger",
        price: 50000,
        image: require('../assets/images/cheese_burger.jpg')
    },
    {
        name: "BBQ bacon burger",
        price: 90000,
        image: require('../assets/images/bbq_burger.jpg')
    },]);
    const [discount, setDiscount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
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
        getSubTotal();
        getTotal();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList showsVerticalScrollIndicator={false} data={data} extraData={selectedId} renderItem={({ item }) => <FoodInCart item={item} ></FoodInCart>}>
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
                <TouchableOpacity onPress={clear}>
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