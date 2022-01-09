import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { HomeHeader } from '../../components/homeHeader';
import { Slider } from '../../components/slider';
import { ClickableText } from '../../components/clickableTextShowAll';
import { MostPopularMoviesList } from '../../components/mostPopularMoviesList';
import { NewMovieList } from '../../components/newMoviesList';
import { Styles } from './styles';
import { apiKey } from '../../api/apiKey';
import axios from 'axios';

export function HomeScreen({ navigation }) {
    const [ movies, setMovies ] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => console.log(response.data()))
    }, [])

    return (
        <SafeAreaView style={ Styles.ScreenContainer }>
            <ScrollView>
                <HomeHeader OnPressMenu={ () => navigation.openDrawer() } />

                <View style={ Styles.SliderContainer }>
                    { <Slider /> }
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
