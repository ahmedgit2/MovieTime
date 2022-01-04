import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';

import { HomeHeader } from '../../components/homeHeader';
import { Slider } from '../../components/slider';
import { Styles } from './styles'


export function HomeScreen() {

    return (
        <SafeAreaView style={Styles.ScreenContainer}>

            <HomeHeader />

            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={Styles.SliderContainer} >
                    <Slider />
                </View>


            </ScrollView>
        </SafeAreaView >
    );
}
