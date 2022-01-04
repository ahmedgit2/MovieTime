import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';

import { Styles } from './styles'

const Height = Dimensions.get('screen').height;

export const SplashScreen = () => {

    const fadeRef = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([

            Animated.timing(fadeRef,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }),
            Animated.timing(fadeRef,
                {
                    toValue: 0,
                    duration: 1000,
                    delay: 2000,
                    useNativeDriver: true
                }),

        ]).start();
    }, [])

    return (

        <View style={Styles.Container} >

            <Animated.View style={{
                opacity: fadeRef,

            }} >

                <Image
                    source={require("../../assets/images/Logo.png")} />

            </Animated.View>

        </View >

    );
}


