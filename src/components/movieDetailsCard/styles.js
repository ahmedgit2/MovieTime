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
        height: height * 0.11,
        width: width,
        paddingLeft: 124,
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: (height * .20) + 1,
        width: (width * 0.25) + 0.5,
        borderRadius: 10,
        elevation: 50,
        position: 'absolute',
        left: 15,
        bottom: 30
    },
    image: {
        flex: 1,
        height: height * .18,
        width: width * 0.25,
        overflow: 'hidden',
        borderRadius: 10,

    },

    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,

    },
    typeContainer: {
        flexDirection: 'row',
        paddingRight: 10,
        flexWrap: 'wrap',
        width: width,
        paddingLeft: 124,

    },
    Text: {
        marginVertical: 5,
        paddingLeft: 10,
        fontSize: 20,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_medium',
    },
    rateText: {
        marginBottom: 5,
        paddingLeft: 4,
        fontSize: 14,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_light'

    },
    smallText: {
        marginBottom: 3,
        fontSize: 12,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: 'roboto_regular',
    },
});
