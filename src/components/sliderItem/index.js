import React from 'react';
import { Image, Pressable, Dimensions } from 'react-native';

import { styles } from './styles';
import { Colors } from '../../assets/colors';

const { height, width } = Dimensions.get('window');

export function SliderItem({ item, onPress }) {
    return (
        <Pressable onPress={ onPress }  >
            <Image
                source={ { uri: item.image } }
                style={ {
                    flex: 1,
                    height: height * .25,
                    width: width - 30,
                    resizeMode: 'stretch',
                    overflow: 'hidden',

                } } />
        </Pressable>
    );
}


