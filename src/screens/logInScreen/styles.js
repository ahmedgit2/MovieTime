
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export const Styles = StyleSheet.create({

    ScreenContainer: {
        flex: 1,
    },

    HeaderContainer: {
        // marginTop: '30%',
        flex: 2,
        justifyContent: 'center'

    },
    InputContainer: {
        alignItems: 'center',
        flex: 3

    },

    FooterContainer: {
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: .4
    },
    Button: {
        marginTop: 40,
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
        paddingLeft: 20
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

