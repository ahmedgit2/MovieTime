import React from 'react';
import { Image, Pressable, Dimensions, View, Text } from 'react-native';

import { Styles } from './styles';

const { height, width } = Dimensions.get('window');

export const PhotoListItem = ({
    item,
    onPress,
}) => {
    return (
        <View style={ Styles.Container }>

            <Pressable onPress={ onPress }  >
                <Image
                    source={ { uri: item.image } }
                    style={ {
                        height: width * 0.242,
                        width: width * 0.4,
                        overflow: 'hidden',
                        borderRadius: 12
                    } } />

            </Pressable>
        </View >
    );
}


