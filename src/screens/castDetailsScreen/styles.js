import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({

    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },

    CastContainer: {
        marginBottom: 5,
        height: height * 0.13,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center',
    },

    MostSuccessfulContainer: {
        height: height * 0.25,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center',
    },

    VerticalList: {
        height: height * 0.35,
        width: width - 30,
        alignSelf: 'center',
    },

});
