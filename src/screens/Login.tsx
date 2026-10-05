import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const Login = ({ navigation }: any) => {

    const handleLogin = () => {
        navigation.navigate("Dashboard")
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={require('../assets/images/SSUET-Logo.png')} />

            <Text style={styles.heading}>STUDENT APP</Text>

            <Text style={styles.subHeading}>Enter your email and password</Text>

            <View style={styles.inputBox}>

                <TextInput
                    placeholder='Enter Email'
                    placeholderTextColor={"#B5B5C3"}
                    style={styles.input}
                />

            </View>

            <View style={styles.inputBox}>
                <TextInput
                    placeholder='Enter Password'
                    placeholderTextColor={"#B5B5C3"}
                    style={styles.input}
                />
            </View>



            <TouchableOpacity style={styles.forgotPassContainer}>
                <Text style={styles.forgotPass}>Forgot your Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtnContainer}>
                <Text style={styles.loginBtnText}>Log In</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 220,
        height: 220,
        marginTop: 60,
        marginBottom: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subHeading: {
        color: '#838385',
        marginBottom: 24,
    },
    inputBox: {
        width: '75%',
        borderRadius: 6,
        backgroundColor: '#f4f4f4',
        borderWidth: 1,
        borderColor: '#A8A8A9',
        elevation: 2,
        marginBottom: 15,
        paddingLeft: 7
    },
    input: {
        color: '#000',
    },
    forgotPassContainer: {
        alignSelf: 'flex-end',
        marginBottom: 40,
    },
    forgotPass: {
        fontWeight: '500'
    },
    loginBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3699FF',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 5,
    },
    loginBtnText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 16,

    },
})