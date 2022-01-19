import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';

import { MovieDetailsHeader } from '../../components/movieDetailsHeader';
import { MovieDetailsCard } from '../../components/movieDetailsCard';
import { ClickableText } from '../../components/clickableTextShowAll';
import { CastList } from '../../components/castList';
import { PhotosList } from '../../components/photosList';
import { Styles } from './styles';
import axios from 'axios';
import { apiKey } from '../../api/apiKey';


export const MovieDetailsScreen = ({ route }) => {
    const [movies, setMovies] = useState({});
    const [photos, setPhotos] = useState({});
    const [cast, setCast] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`)
            .then(response => {
                setMovies(response.data);
            });
        axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`)
            .then(response => {
                setPhotos(response.data);
            });
        axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`)
            .then(response => {
                setCast(response.data);
            });
    }, [])

    const item = "11"
    return (
        <SafeAreaView style={Styles.ScreenContainer}>

            <ScrollView >
                <MovieDetailsHeader img={'https://image.tmdb.org/t/p/w500/' + movies.backdrop_path} />

                <MovieDetailsCard item={movies} />

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Release Date : </Text>
                    <Text style={Styles.SecondaryTextDark}>{movies.release_date} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Director : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Producer : </Text>
                    <Text style={Styles.SecondaryTextDark}> {item} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Composer : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Box Office : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
                </View>


                <ClickableText text={'STORYLINE'} clickableText='' />
                <View style={{ paddingHorizontal: 15 }}>
                    <Text style={Styles.SecondaryTextDark}> {movies.overview} </Text>
                </View>


                <ClickableText text='CAST' clickableText='' />
                <View style={Styles.CastContainer}>
                    <CastList />
                </View>

                <ClickableText text='PHOTOS' clickableText='' />
                <View style={Styles.CastContainer}>
                    <PhotosList />
                </View>

                <View style={{ marginVertical: 10 }} />


            </ScrollView >
        </SafeAreaView >
    );

}
