import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { NewMovieList } from '../../components/newMoviesList';
import { CastDetailsCard } from '../../components/castDetailsCard';
import { ClickableText } from '../../components/clickableTextShowAll';
import { PhotosList } from '../../components/photosList';
import { VerticalList } from '../../components/verticalList';

import { Styles } from './styles';


export const CastDetailsScreen = ({ item = test }) => {
    return (
        <SafeAreaView style={ Styles.ScreenContainer }>
            <CastDetailsCard />


            <ClickableText text='PHOTOS' />
            <View style={ Styles.CastContainer }>
                <PhotosList />
            </View>

            <ClickableText text='MOST SUCCESSFUL MOVIES' />
            <View style={ Styles.MostSuccessfulContainer }>
                <NewMovieList />
            </View>

            <ClickableText text='ALL MOVIES' clickableText='' />

            <View style={ Styles.VerticalList }>
                <VerticalList />
            </View>


        </SafeAreaView>

    );

}
const test = {
    name: 'sssssssss',
    img: 'https://palsawa.com/uploads/images/2021/12/yDzfD.jpg',
    rate: '8.5',
    time: '2h 30m',
    text: 'ddddddddddddd',
}