import { Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as yup from 'yup'
import { Formik } from 'formik'






const Login = ({ navigation }: any) => {

    const LoginSchema = yup.object().shape({
        email: yup.string()
            .email('Invalid Email address')
            .required('Email is required'),
        password: yup.string()
            .min(6, 'Password must be atleast 6 characters')
            .required('Password is required')
    })

    const handleLogin = () => {
        Keyboard.dismiss()
        navigation.reset({
            index: 0,
            routes: [{ name: 'MyDrawer' }]
        })
    }



    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle='light-content' />

            <Image resizeMode='cover' style={[StyleSheet.absoluteFill, { opacity: 0.4 }]} source={require('../assets/images/others/ssu.png')} />

            <Image style={styles.logo} source={require('../assets/images/others/SSUET-Logo.png')} />

            <Text style={styles.heading}>STUDENT APP</Text>

            <Text style={styles.subHeading}>Enter your email and password</Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >

                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>


                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder='Enter Email'
                                placeholderTextColor={"#B5B5C3"}
                                style={styles.input}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>

                        {touched.email && errors.email && (
                            <Text style={styles.errorTxt}>{errors.email}</Text>
                        )}



                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder='Enter Password'
                                placeholderTextColor={"#B5B5C3"}
                                style={styles.input}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                            />
                        </View>

                        {touched.password && errors.password && (
                            <Text style={styles.errorTxt}>{errors.password}</Text>
                        )}


                        <TouchableOpacity style={styles.forgotPassContainer}>
                            <Text style={styles.forgotPass}>Forgot your Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtnContainer}>
                            <Text style={styles.loginBtnText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </Formik>


        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 220,
        height: 220,
        marginTop: 40,
        marginBottom: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFFFFF'
    },
    subHeading: {
        color: '#c4c4c4',
        marginBottom: 24,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center'
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
        height: 48,
    },
    errorTxt: {
        width: '75%', // 👈 Matches the input box width so error aligns nicely
        color: '#FF6B6B',
        fontSize: 12,
        marginBottom: 15,
        marginLeft: 4,
    },
    forgotPassContainer: {
        alignSelf: 'flex-end',
        marginBottom: 40,
    },
    forgotPass: {
        fontWeight: '500',
        color: '#FFFFFF'
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