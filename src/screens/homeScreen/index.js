import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { HomeHeader } from '../../components/homeHeader';
import { Slider } from '../../components/slider';
import { ClickableText } from '../../components/clickableTextShowAll';
import { MostPopularMoviesList } from '../../components/mostPopularMoviesList';
import { NewMovieList } from '../../components/newMoviesList';
import { Styles } from './styles';

export function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={Styles.ScreenContainer}>
            <ScrollView>
                <HomeHeader OnPressMenu={() => navigation.openDrawer()} />

                <View style={Styles.SliderContainer}>
                    <Slider />
                </View>

                <ClickableText text={'MOST POPULAR MOVIES'} />

                <View style={Styles.MostPopularContainer}>
                    <MostPopularMoviesList />
                </View>

                <ClickableText text={'NEW'} />

                <View style={Styles.MostPopularContainer}>
                    <NewMovieList />
                </View>

            </ScrollView>
        </SafeAreaView >
    );

}
