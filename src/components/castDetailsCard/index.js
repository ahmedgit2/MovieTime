import React from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'

import { Styles } from './styles';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export const CastDetailsCard = ({ item = test }) => {
    return (

        <View style={ Styles.card }>
            <Image
                source={ { uri: item.img } }
                style={ Styles.image }
            />

            <View style={ Styles.nameContainer }>

                <Text style={ Styles.Text }> Release Date : </Text>
                <Text style={ Styles.Text2 }>{ item.name } </Text>

                <View style={ Styles.HorizontalText }>
                    <Text style={ Styles.SecondaryTextDark }> Director : </Text>
                    <Text style={ Styles.SecondaryText }>{ item.name } </Text>
                </View>


                <View style={ Styles.HorizontalText }>
                    <Text style={ Styles.SecondaryTextDark }> Composer : </Text>
                    <Text style={ Styles.SecondaryText }>{ item.name } </Text>
                </View>

                <View style={ Styles.HorizontalText }>
                    <Text style={ Styles.SecondaryTextDark }> Box Office : </Text>
                    <Text style={ Styles.SecondaryText }>{ item.name } </Text>
                </View>




            </View>
        </View>

    );

}
const test = {
    name: 'sssssssss',
    img: 'https://palsawa.com/uploads/images/2021/12/yDzfD.jpg',
    text: 'ddddddddddddd',

}