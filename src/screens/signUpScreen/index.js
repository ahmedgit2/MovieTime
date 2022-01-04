import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { useForm } from "react-hook-form";
import { InputController } from "../../components/inputController"
import { Styles } from './styles'


export function SignUpScreen() {

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
                        name='name'
                        control={control}
                        placeholder={'Name'}
                        rules={{
                            required: (true, 'Name is required'),
                            maxLength: ({
                                value: 30,
                                message: 'Maximum 30 characters'
                            }),
                            minLength: ({
                                value: 8,
                                message: 'Minimum 8 characters'
                            }),
                            validate: {
                                SpecialChar: (value) => /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){8,30}[a-zA-Z0-9]$/.test(value) || `Use only Dots . or _  between characters `,
                                Space: (value) => /^\S*$/.test(value) || `You cant use any spaces`
                            }

                        }}
                        errors={errors.name ? errors.name.message : null}
                    />
                    <InputController
                        name='email'
                        control={control}
                        placeholder={'Email'}
                        rules={{
                            required: (true, 'Email is required'),
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email address',
                            }
                        }}
                        errors={errors.email ? errors.email.message : null}
                    />
                    <InputController
                        name='password'
                        control={control}
                        placeholder={'Password'}
                        rules={{
                            required: (true, 'Password is required'),
                            maxLength: ({
                                value: 30,
                                message: 'Maximum 30 characters'
                            }),
                            minLength: ({
                                value: 8,
                                message: 'Minimum 8 characters'
                            }),
                            validate: {
                                Space: (value) => /^\S*$/.test(value) || `You cant use any spaces`
                            }
                        }}
                        errors={errors.password ? errors.password.message : null}
                    />


                    <TouchableOpacity activeOpacity={0.7} style={Styles.Button}>
                        <Text style={Styles.SignInButtonText} >
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView >
    );
}
