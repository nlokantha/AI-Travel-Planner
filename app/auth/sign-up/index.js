import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from './../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SingUp() {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullName, setFullName] = useState();
    const OnCreateAccount = () => {
        if (!email && !password && !fullName) {
            ToastAndroid.show("Please Enter all Details", ToastAndroid.BOTTOM);
            return;

        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

    }
    return (
        <View style={{
            padding: 25,
            height: "100%",
            paddingTop: 50,
            backgroundColor: Colors.WHITE,
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 30,
                marginTop: 30,
            }}>Create New Account</Text>

            {/* Full Name */}
            <View style={{
                marginTop: 50,
            }}>
                <Text style={styles.text} >Full Name</Text>
                <TextInput style={styles.input} placeholder='Enter Full Name' onChangeText={(value) => setFullName(value)} ></TextInput>
            </View>

            {/* Email */}
            <View style={{
                marginTop: 20,
            }}>
                <Text style={styles.text} >Email</Text>
                <TextInput style={styles.input} placeholder='Enter Email' onChangeText={(value) => setEmail(value)} ></TextInput>
            </View>
            {/* Password */}
            <View style={{
                marginTop: 20,
            }}>
                <Text style={styles.text} >Password</Text>
                <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
            </View>
            {/* Create Account Button */}
            <TouchableOpacity style={{
                padding: 20,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 12,
                marginTop: 50,
            }} onPress={OnCreateAccount}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                }}>Create Account</Text>
            </TouchableOpacity>
            {/* Sign In Button */}
            <TouchableOpacity onPress={() => router.push("auth/sign-in")} style={{
                padding: 20,
                backgroundColor: Colors.WHITE,
                borderRadius: 12,
                marginTop: 20,
                borderWidth: 1,
                borderColor: Colors.GREY,
            }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: "center",
                    fontSize: 17,
                }}>Sign In</Text>
            </TouchableOpacity>


        </View >
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: Colors.GREY,
        marginTop: 5,
        fontFamily: "outfit",
    },
    text: {
        fontFamily: "outfit",

    }
})