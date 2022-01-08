import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({

    TextButtonContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 18,
    },
    Text: {
        fontSize: 14,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: 'roboto_medium',

    },
    ClickText: {
        fontSize: 14,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'roboto_regular',

    },
});

