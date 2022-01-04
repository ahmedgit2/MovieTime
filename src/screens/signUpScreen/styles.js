import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    ScreenContainer: {
        flex: 1,
    },

    HeaderContainer: {
        marginTop: 40,
        height: height * .25,
        //flex: 2,
        justifyContent: 'center'

    },
    InputContainer: {
        marginTop: 20,
        height: height * .5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //flex: 3

    },

    Button: {
        marginTop: 40,
        backgroundColor: Colors.main,
        width: 305,
        height: 47,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },


    SignInButtonText: {
        fontSize: 16,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'roboto_medium'
    },

    BigText: {
        fontSize: 26,
        color: Colors.black,
        textAlign: 'center',
        marginBottom: 7,
        fontFamily: 'roboto_regular',
        fontWeight: '500',

    },
    SubText: {
        fontSize: 14,
        color: Colors.middle,
        textAlign: 'center',
        fontFamily: 'roboto_regular'
    },


});

