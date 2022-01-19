import React from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'

import { ClickableText } from '../clickableTextShowAll';
import { Styles } from './styles';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export const MovieDetailsCard = ({ item }) => {
    console.log(item)
    return (
        <View style={Styles.ScreenContainer}>

            <View style={Styles.imageContainer}>
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }}
                    style={Styles.image} />
            </View>

            <View style={Styles.nameContainer}>

                <Text style={Styles.Text} >{item.title}</Text>

                <View style={Styles.rateContainer}>
                    <Fontisto name='star'
                        size={15}
                        color={Colors.gold}
                    />

                    <Text style={Styles.rateText}>{item.vote_average}</Text>

                    <Fontisto name='clock'
                        size={15}
                        color={Colors.middle}
                        style={{ paddingLeft: 20 }}
                    />

                    <Text style={Styles.rateText}>{item.release_date}</Text>

                </View>


            </View>
            <View style={Styles.typeContainer}>
                {item?.genres?.map((x) => {
                    return (
                        <View style={{
                            backgroundColor: "#ececec",
                            margin: 5,
                            borderRadius: 4,
                            width: 60,
                            height: 17,
                        }} key={x.id}>
                            <Text style={Styles.smallText}>{x.name.toString()}</Text>
                        </View>

                    )
                })}
            </View>
        </View>

    );

}
const test = {
    name: 'sssssssss',
    img: 'https://palsawa.com/uploads/images/2021/12/yDzfD.jpg',
    rate: '8.5',
    time: '2h 30m',
    text: 'ddddddddddddd',
    type: [
        { tb: 'action', key: 1 },
        { tb: 'comedy', key: 2 },
        { tb: 'dkdjdd', key: 3 },
    ]
}