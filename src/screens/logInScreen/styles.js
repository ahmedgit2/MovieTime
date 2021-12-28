
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export const Styles = StyleSheet.create({

    ScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderContainer: {
        marginVertical: 90

    },
    FooterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        alignItems: 'flex-end'
    },

    Button: {
        marginTop: 25,
        backgroundColor: Colors.main,
        width: width * .80,
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
        fontSize: 25,
        color: Colors.black,
        textAlign: 'center',
        marginBottom: 7,
        fontFamily: 'roboto_regular',
        fontWeight: '500',

    },
    SubText: {
        fontSize: 13,
        color: Colors.middle,
        textAlign: 'center',
        fontFamily: 'roboto_regular'
    },
    ForgetPasswordText: {
        fontSize: 13,
        color: Colors.secondary,
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginBottom: 5,
        marginBottom: 5,
        fontFamily: 'roboto_medium'
    },
    SignUpText: {
        fontSize: 14,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: 'roboto_regular',
        padding: 8,

    },
    ClickSignUpText: {
        fontSize: 14,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'roboto_medium',
        paddingVertical: 8,
    },
});

