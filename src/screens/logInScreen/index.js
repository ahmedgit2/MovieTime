import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import { Input } from "../../components/inputBox";
import { Styles } from './styles'

const { height, width } = Dimensions.get('window');

export function LoginScreen() {

    console.log(height * 0.066);

    return (


        <SafeAreaView style={Styles.ScreenContainer}>
            <ScrollView contentContainerStyle={{ flex: 1, }} showsVerticalScrollIndicator={false}>

                <View style={Styles.HeaderContainer} >
                    <Text style={Styles.BigText}>
                        Welcome to Movietime!
                    </Text>
                    <Text style={Styles.SubText}>
                        Your personal guid to the world of cinema
                    </Text>
                </View>

                <View >
                    <Input placeholder={'Email, phone, number, username'} />
                    <Input placeholder={'Password'} />

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
                    <Text style={Styles.SignUpText}>
                        Dont have an account?
                    </Text>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={Styles.ClickSignUpText} >
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
