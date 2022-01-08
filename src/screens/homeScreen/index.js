import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions";

import { HomeHeader } from '../../components/homeHeader';
import { Slider } from '../../components/slider';
import { ClickableText } from '../../components/clickableTextShowAll';
import { MostPopularMoviesList } from '../../components/mostPopularMoviesList';
import { NewMovieList } from '../../components/newMoviesList';
import { Styles } from './styles'

export function HomeScreen() {

    const popularMovies = async () => {
        await fetchPopularMovies(res => {
            console.log(res)
        })
    }

    useEffect(() => {
        popularMovies();
    }, [])

    return (
        <SafeAreaView style={ Styles.ScreenContainer }>
            <ScrollView>
                <HomeHeader />

                <View style={ Styles.SliderContainer }>
                    <Slider />
                </View>

                <ClickableText text={ 'MOST POPULAR MOVIES' } />

                <View style={ Styles.MostPopularContainer }>
                    <MostPopularMoviesList />
                </View>

                <View style={ Styles.EmptySpace } />

                <ClickableText text={ 'NEW' } />

                <View style={ Styles.MostPopularContainer }>
                    <NewMovieList />
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}
