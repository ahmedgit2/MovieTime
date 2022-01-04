import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },

    HeaderContainer: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white

    },
    SliderContainer: {
        marginTop: 20,
        height: height * .3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //flex: 3

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
    ForgetPasswordText: {
        fontSize: 14,
        color: Colors.secondary,
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontFamily: 'roboto_medium',
        paddingLeft: 24
    },
    SignUpText: {
        fontSize: 15,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: 'roboto_regular',
        padding: 8,

    },
    ClickSignUpText: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'roboto_regular',
        paddingVertical: 8,
    },
});

