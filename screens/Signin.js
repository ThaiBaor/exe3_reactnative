import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export default function Signin({ route }) {
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [pass, setPass] = useState();

    let getUser = async () => {
        try {
            data = { name: name, email: email, phone: phone, pass: pass }
            const response = await fetch(`${uri}/them`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    signup = () => {
        setName('')
        setEmail('')
        setPhone('')
        setPass('')
        alert(
            'Name: ' +
            name +
            ' | Email: ' +
            email +
            ' | Phone: ' +
            phone +
            ' | Pass: ' +
            pass
        );
    };
    facebook = () => {
        alert('đăng nhập bằng Facebook');
    };
    google = () => {
        alert('đăng nhập bằng Google');
    };
    instagram = () => {
        alert('đăng nhập bằng Instagram');
    };
    twitter = () => {
        alert('đăng nhập bằng Twitter');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.back();
                    }}></TouchableOpacity>
            </View>
            <View>
                <Image
                    source={require('../assets/images/background/background_signup.png')}
                    style={styles.img_bg}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.signup}>SIGN UP</Text>
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_user.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={(text) => {
                            setName(text)
                        }}
                        value={name}
                    />
                </View>
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_mail.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        value={email}
                    />
                </View>
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_phone.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="gray"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setPhone(text)
                        }}
                        value={phone}
                    />
                </View>
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_pass.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="gray"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setPass(text)
                        }}
                        value={pass}
                    />
                </View>
                <TouchableOpacity onPress={() => this.signup()}>
                    <Text style={styles.btn_login}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Or via social media</Text>
                <View style={styles.img_input}>
                    <TouchableOpacity onPress={() => this.facebook()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/facebook.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.google()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/google.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.instagram()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/instagram.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.twitter()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/twitter.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img_input: {
        resizeMode: 'contain',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img_bg: {
        width: '100%',
        height: 150,
    },
    img_icon: {
        marginTop: 12,
        marginLeft: 22,
        width: 25,
        height: 20,
    },
    img_link: {
        marginTop: 10,
        marginBottom: 10,
        width: 50,
        height: 50,
    },
    signup: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    input: {
        paddingBottom: 15,
        paddingLeft: 35,
        marginLeft: -28,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 5,
        width: '90%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    btn_login: {
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        paddingLeft: 150,
        paddingRight: 150,
        color: 'white',
        borderColor: '#EB445A',
        backgroundColor: '#EB445A',
    },
    link: {
        margin: 10,
    },
});
