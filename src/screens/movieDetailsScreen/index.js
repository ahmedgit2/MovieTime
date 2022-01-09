import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';

import { MovieDetailsHeader } from '../../components/movieDetailsHeader';
import { MovieDetailsCard } from '../../components/movieDetailsCard';
import { ClickableText } from '../../components/clickableTextShowAll';
import { CastList } from '../../components/castList';
import { PhotosList } from '../../components/photosList';
import { Styles } from './styles';

export const MovieDetailsScreen = ({ item = 'April' }) => {
    return (
        <SafeAreaView style={Styles.ScreenContainer}>

            <ScrollView >
                <MovieDetailsHeader />

                <View style={3 > 3 ? { paddingBottom: 27 } : { paddingBottom: 10 }}>

                    <MovieDetailsCard />
                </View>


                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Release Date : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Director : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
                </View>

                <View style={Styles.HorizontalText}>
                    <Text style={Styles.MainText}> Producer : </Text>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
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
                <View style={{ paddingLeft: 15 }}>
                    <Text style={Styles.SecondaryTextDark}>{item} </Text>
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
