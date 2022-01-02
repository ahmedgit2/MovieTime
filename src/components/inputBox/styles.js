
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
        marginBottom: height * .038,
        fontFamily: 'roboto_regular',
        fontSize: 14,
    },

    errorMessage: {
        paddingHorizontal: width * .02,
        fontSize: 14,
        color: Colors.main,
        textAlign: 'left',
        paddingTop: 1,
        paddingBottom: 7
        , fontFamily: 'roboto_regular'
    },
});

