import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    ScreenContainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: Colors.white,
    },

    CastContainer: {
        marginBottom: 5,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center',
    },
    HorizontalText: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 0.5

    },
    MainText: {
        fontSize: 13.5,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_medium',
    },
    SecondaryText: {
        fontSize: 13.5,
        color: Colors.secondary,
        textAlign: 'left',
        fontFamily: 'roboto_regular'

    },
    SecondaryTextDark: {
        fontSize: 13.5,
        color: Colors.darks,
        textAlign: 'left',
        fontFamily: 'roboto_regular',
    },

});

