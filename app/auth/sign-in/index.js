import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { Colors } from './../../../constants/Colors'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
import { useState } from 'react';



export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const signIn = () => {
        if (!email && !password) {
            ToastAndroid.show("Please Enter Email and Password", ToastAndroid.BOTTOM);
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode == "auth/invalid-credential") {
                    ToastAndroid.show("Please Enter valid Email And Password", ToastAndroid.BOTTOM);
                }
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
                fontSize: 30,
                fontFamily: "outfit-bold",
                marginTop: 30,
            }}>Let's Sign You in</Text>
            <Text style={{
                fontSize: 30,
                fontFamily: "outfit",
                color: Colors.GREY,
                marginTop: 20,
            }}>Welcome Back!</Text>
            <Text style={{
                fontSize: 30,
                fontFamily: "outfit",
                color: Colors.GREY,
            }}>You've been missed</Text>
            {/* Email */}
            <View style={{
                marginTop: 50,
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
            {/* Sign In Button */}
            <TouchableOpacity style={{
                padding: 20,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 12,
                marginTop: 50,
            }} onPress={signIn}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                }}>Sign in</Text>
            </TouchableOpacity>
            {/* Create account button */}
            <TouchableOpacity onPress={() => router.push("auth/sign-up")} style={{
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
                }}>Create account</Text>
            </TouchableOpacity>
        </View>
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