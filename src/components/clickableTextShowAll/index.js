import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Styles } from './styles'


export function ClickableText({ text = 'some text', clickableText = 'Show all' }) {
    return (
        <View style={ Styles.TextButtonContainer }>
            <Text style={ Styles.Text }>
                { text }
            </Text>
            <TouchableOpacity activeOpacity={ 0.7 }>
                <Text style={ Styles.ClickText } >
                    { clickableText }
                </Text>
            </TouchableOpacity>
        </View>

    );
}
