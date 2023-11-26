import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import backgroundImage from '../assets/login-background.jpg';
import logo from '../assets/crunchyroll-logo.png';
import style from '../styles/LoginStyle';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  const onPressForgotPassword = () => {
    // Handle Forgot Password logic here
    // Example: navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
      <KeyboardAvoidingView style={style.container} behavior="padding">
        <View style={style.logoContainer}>
          <Image source={logo} style={style.logo} />
          <Text style={style.title}>Sugoii</Text>
        </View>
        <View style={style.inputGroup}>
          <View style={style.centerAlign}>
            <Text style={[style.label, style.boldText]}>Email</Text>
          </View>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Enter your Email / Username"
            keyboardType="email-address"
            placeholderTextColor="#DDD3D1"
            style={style.input}
          />
        </View>
        <View style={style.inputGroup}>
          <View style={style.centerAlign}>
            <Text style={[style.label, style.boldText]}>Password</Text>
          </View>
          <TextInput
            onChangeText={(val) => setPassword(val)}
            value={password}
            placeholder="Enter your Password"
            secureTextEntry={true}
            placeholderTextColor="#DDD3D1"
            style={style.input}
          />
          <Text style={style.passwordPolicyText}>
            By logging in you're agreeing to our{' '}
            <Text style={style.orangeText}>Terms</Text> &{' '}
            <Text style={style.orangeText}>Privacy Policy </Text> 
            and are at least 16 years old.
          </Text>
        </View>
        <TouchableOpacity onPress={onPressLogin} style={style.button}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={style.bottomContainer}>
          <TouchableOpacity onPress={onPressForgotPassword} style={style.bottomLink}>
            <Text style={[style.bottomText, style.orangeText]}>Forgot Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignup} style={style.bottomLink}>
            <Text style={[style.bottomText, style.orangeText]}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
