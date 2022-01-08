import React from 'react';
import { Image, Pressable, Dimensions, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Styles } from './styles';
import { Colors } from '../../assets/colors';

const { height, width } = Dimensions.get('window');

export const CastListItem = ({
    item,
    onPress,
}) => {
    return (
        <View style={ [ Styles.Container, { width: width * 0.2 } ] }>

            <Pressable onPress={ onPress }  >
                <Image
                    source={ { uri: item.image } }
                    style={ {
                        height: width * 0.2,
                        width: width * 0.2,
                        overflow: 'hidden',
                        borderRadius: width
                    } } />

            </Pressable>


            <Text style={ Styles.Text }>{ item.name }</Text>

        </View >
    );
}


