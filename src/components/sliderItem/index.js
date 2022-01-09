import React from 'react';
import { Image, Pressable, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window');

export const SliderItem = ({ item, onPress }) => {
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


