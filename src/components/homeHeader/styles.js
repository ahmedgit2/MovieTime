import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({



    HeaderContainer: {

        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white

    },

    Image: {
        height: 30,
        width: 120
    },
    ImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    RightIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 9
    },
    LeftIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15

    },
});

