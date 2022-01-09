import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";

import { logIn, getCurrentUserProfile } from '../../firebase/useFirebase';
import { InputController } from "../../components/inputController"
import { Styles } from './styles'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

import auth from '../../firebase/firebase'

export const LoginScreen = () => {
    const [ error, setError ] = useState(null)
    const auth = getAuth();
    const navigation = useNavigation();

    const { getValues, control, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    const onSignIn = () => {
        const { email, password } = getValues();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user + "  logged in");
                navigation.navigate('HomeScreen')
                return userCredential.user;
                setError(null)
            })
            .catch(error => setError(error))
    }

    const onPressSignUp = () => { navigation.navigate('SignUpScreen') }

    return (
        <SafeAreaView style={ Styles.ScreenContainer }>
            <ScrollView showsVerticalScrollIndicator={ false } >


                <View style={ Styles.HeaderContainer } >
                    <Text style={ Styles.BigText }>
                        Welcome to Movietime!
                    </Text>
                    <Text style={ Styles.SubText }>
                        Your personal guid to the world of cinema
                    </Text>
                </View>

                <View style={ Styles.InputContainer } >
                    <InputController
                        name='email'
                        control={ control }
                        placeholder={ 'Email' }
                        rules={ {
                            required: (true, 'Email is required'),
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email address',
                            },
                        } }
                        errors={ errors.email ? errors.email.message : null }
                    />
                    <InputController
                        name='password'
                        control={ control }
                        placeholder={ 'Password' }
                        secureTextEntry={ true }
                        rules={ {
                            required: (true, 'Password Is Required'),
                            maxLength: ({
                                value: 30,
                                message: 'Maximum 30 characters'
                            }),
                            minLength: ({
                                value: 8,
                                message: 'Minimum 8 characters'
                            }),
                        } }
                        errors={ errors.password ? errors.password.message : null }
                    />

                    <TouchableOpacity activeOpacity={ 0.7 } style={ Styles.ForgetPasswordText }>
                        <Text style={ Styles.ForgetPasswordText } >
                            Forgot your Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ handleSubmit(onSignIn) } activeOpacity={ 0.7 } style={ Styles.Button }>
                        <Text style={ Styles.SignInButtonText } >
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={ Styles.FooterContainer }>
                    <View style={ Styles.Footer } >
                        <Text style={ Styles.SignUpText }>
                            Dont have an account?
                        </Text>

                        <TouchableOpacity onPress={ onPressSignUp } activeOpacity={ 0.7 }>
                            <Text style={ Styles.ClickSignUpText } >
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}
