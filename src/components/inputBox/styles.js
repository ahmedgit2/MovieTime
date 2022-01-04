
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export const InputTextStyle = StyleSheet.create({

    inputText: {
        backgroundColor: Colors.light,
        height: 46,
        width: width * .80,
        borderRadius: 8,
        paddingLeft: 20,
        marginBottom: 32,
        fontFamily: 'roboto_regular',
        fontSize: 14,

    },

    errorMessage: {
        marginHorizontal: 8,
        fontSize: 14,
        color: Colors.main,
        textAlign: 'left',
        marginTop: 1,
        paddingBottom: 15
        , fontFamily: 'roboto_regular'
    },
});

