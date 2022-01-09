import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({

    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        flexWrap: "wrap",
    },

    nameContainer: {
        height: height * 0.21,
        width: width,
        paddingLeft: 125,
        paddingTop: 20
    },

    card: {
        justifyContent: 'center',
        height: height * 0.18,
        width: width,
        paddingLeft: 20,
    },

    image: {
        position: 'absolute',
        height: width * 0.31,
        width: width * 0.31,
        overflow: 'hidden',
        borderRadius: width,
        left: 15,
        top: 12
    },

    HorizontalText: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 4,
        paddingVertical: 0.5

    },
    Text: {
        paddingLeft: 2,
        fontSize: 17,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_medium',
    },
    Text2: {
        marginBottom: 3,
        paddingLeft: 8,
        fontSize: 15,
        color: Colors.dark,
        textAlign: 'left',
        fontFamily: 'roboto_light',
        marginBottom: 15

    },
    SecondaryText: {
        fontSize: 14,
        color: Colors.dark,
        textAlign: 'left',
        fontFamily: 'roboto_light',
        marginLeft: 5

    },
    SecondaryTextDark: {
        fontSize: 14,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_medium',
    },

});
