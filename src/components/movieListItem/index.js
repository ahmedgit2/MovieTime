import React from 'react';
import { Image, Pressable, Dimensions, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Styles } from './styles';
import { Colors } from '../../assets/colors';

const { height, width } = Dimensions.get('window');

export function MovieCard({ item, onPress, cardHeight = height * .22, cardWidth = width * 0.30 }) {
    return (
        <View style={[Styles.Container, { width: cardWidth }]}>

            <Pressable onPress={onPress}  >
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }}
                    style={{
                        height: cardHeight,
                        width: cardWidth,
                        overflow: 'hidden',
                        borderRadius: 15
                    }} />

            </Pressable>
            <Text style={Styles.Text}>{item.title}</Text>

            {item.vote_average &&
                <View style={Styles.rateContainer}>
                    <Ionicons name='star' size={width * 0.037} color={Colors.gold} />
                    <Text style={Styles.rateText}>{item.vote_average}</Text>
                </View>
            }

            {item.release_date &&
                <Text style={Styles.rateText}>{item.release_date}</Text>
            }
        </View>
    );
}


