import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // Handle when the user is not authenticated
            }
        });

        return () => unsubscribe(); // Unsubscribe when the component is unmounted
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login');
        }).catch((error) => {
            // Handle logout error
        });
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://img.freepik.com/premium-photo/gradient-background-color-background-gradient-wallpaper-mobile-ios-android_873925-52090.jpg?w=360" }} // Change the URL to your background image
                style={styles.backgroundImage}
            />
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome, {user?.email}</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white background
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcomeText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    logoutButton: {
        backgroundColor: "red",
        padding: 15,
        alignItems: "center",
        borderRadius: 10,
    },
    logoutButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});
