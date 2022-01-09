import React from 'react';
import { Image, Pressable, Dimensions, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Styles } from './styles';
import { Colors } from '../../assets/colors';

const { height, width } = Dimensions.get('window');

export const VerticalListItem = ({ item, onPress, }) => {
    return (
        <View style={ Styles.Container }>
            <Pressable onPress={ onPress } style={ Styles.Container } >
                <Image
                    source={ { uri: item.image } }
                    style={ {
                        height: width * 0.24,
                        width: width * 0.16,
                        overflow: 'hidden',
                        borderRadius: 10,
                        marginBottom: 15
                    } } />

                <View style={ Styles.TextContainer }>

                    <View style={ Styles.nameContainer }>
                        <Text style={ Styles.BigText }>{ item.name }</Text>
                    </View>

                    <View style={ Styles.rateContainer }>
                        <Ionicons name='star'
                            size={ 17 }
                            color={ Colors.gold }
                        />
                        <Text style={ Styles.rateText }>{ item.rate }</Text>
                    </View>

                    <Text style={ Styles.Text }>{ item.rate }</Text>

                    <Text style={ [ Styles.Text, { marginTop: 16 } ] }>{ item.rate }</Text>
                    <Text style={ Styles.Text }>{ item.rate }</Text>

                </View>

            </Pressable>
        </View>
    );
}


