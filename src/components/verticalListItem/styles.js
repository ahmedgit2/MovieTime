import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    Container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    nameContainer: {
        flexDirection: 'row',
    },
    rateContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 240,
        top: 2,

    },
    Text: {
        paddingLeft: 4,
        fontSize: 13.5,
        color: Colors.middle,
        textAlign: 'left',
        fontFamily: 'roboto_medium',
        fontWeight: '800'
    },
    BigText: {
        marginBottom: 3,
        fontSize: 14,
        color: Colors.black,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'roboto_medium',
    },
    rateText: {
        paddingLeft: 4,
        fontSize: 15,
        color: Colors.dark,
        textAlign: 'left',
        fontFamily: 'roboto_regular'

    },
    TextContainer: {
        paddingLeft: 20,
    },

});

