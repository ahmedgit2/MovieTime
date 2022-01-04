import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { useForm } from "react-hook-form";
import { InputController } from "../../components/inputController"
import { Styles } from './styles'


export function LoginScreen() {

    const { getValues, control, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

    return (
        <SafeAreaView style={Styles.ScreenContainer}>
            <ScrollView showsVerticalScrollIndicator={false} >


                <View style={Styles.HeaderContainer} >
                    <Text style={Styles.BigText}>
                        Welcome to Movietime!
                    </Text>
                    <Text style={Styles.SubText}>
                        Your personal guid to the world of cinema
                    </Text>
                </View>

                <View style={Styles.InputContainer} >
                    <InputController
                        name='username'
                        control={control}
                        placeholder={'Email, phone, number, username'}
                        rules={{ required: (true, 'UserName Is Required') }}
                        errors={errors.username ? errors.username.message : null}
                    />
                    <InputController
                        name='password'
                        control={control}
                        placeholder={'Password'}
                        rules={{ required: (true, 'Password Is Required') }}
                        errors={errors.password ? errors.password.message : null}
                    />

                    <TouchableOpacity activeOpacity={0.7} style={Styles.ForgetPasswordText}>
                        <Text style={Styles.ForgetPasswordText} >
                            Forgot your Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={Styles.Button}>
                        <Text style={Styles.SignInButtonText} >
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.FooterContainer}>
                    <View style={Styles.Footer} >
                        <Text style={Styles.SignUpText}>
                            Dont have an account?
                        </Text>

                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={Styles.ClickSignUpText} >
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}
