import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    ScreenContainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: Colors.white,
    },

    HeaderContainer: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    SliderContainer: {
        marginTop: 5,
        height: height * .25,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center'
    },
    MostPopularContainer: {
        height: height * 0.29,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center',
    },
    EmptySpace: {
        height: height * 0.18,
        width: width - 30,

    },
    NewContainer: {
        height: height * 0.28,
        width: width - 30,
        borderRadius: 10,
        alignSelf: 'center',
    },

});

