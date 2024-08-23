import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter();
    return (
        <View>
            <Image source={require("./../assets/images/traval.jpg")}
                style={
                    {
                        width: `100%`,
                        height: 500,
                    }
                } />
            <View style={styles.container}>
                <Text style={{
                    marginTop: 35,
                    fontSize: 28,
                    fontFamily: "outfit-bold",
                    textAlign: "center",
                }}>Lokantha Namal Bandara</Text>

                <Text style={{
                    fontSize: 17,
                    fontFamily: "outfit",
                    textAlign: "center",

                }}>
                    28/69 Werenketagoda Ampara
                </Text>

                <TouchableOpacity style={styles.button}
                    onPress={() => router.push("auth/sign-in")}>
                    <Text style={{
                        fontFamily: "outfit",
                        fontSize: 17,
                        color: Colors.WHITE,
                        textAlign: "center",
                    }}>
                        Sign With Google
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: "100%",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 12,
        marginTop: "30%",
        marginHorizontal: "5%",


    }
})