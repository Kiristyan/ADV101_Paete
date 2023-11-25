import { View, TextInput, Text, TouchableOpacity } from "react-native";
import style from "../styles/LoginStyle";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase.config";
import { useState } from "react";

export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('user1@gmail.com');
    const [password, setPassword] = useState('1234567');
       
    const onPressLogin = (e) => {
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     alert('Successfully registered');
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        //     // ..
        // });
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage);
        });
       
    }

    return (
        <View style={style.container}>
            
            <View style={style.inputGroup}>
                <Text>Email</Text>
                <TextInput 
                    onChangeText={(val) => setEmail(val)}
                    value={email}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    style={style.input}
                />
            </View>
            <View style={style.inputGroup}>
                <Text>Password</Text>
                <TextInput 
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    style={style.input}
                />
            </View>
            <TouchableOpacity 
                onPress={onPressLogin}
                style={style.button}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}