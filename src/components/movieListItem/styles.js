import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({


    Container: {
        marginRight: 12,
        backgroundColor: Colors.white,
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Text: {
        paddingHorizontal: 3,
        marginTop: 6,
        marginBottom: 3,
        fontSize: 12,
        color: Colors.black,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'roboto_medium',
    },
    rateText: {
        paddingLeft: 4,
        fontSize: 12,
        color: Colors.black,
        textAlign: 'left',
        fontFamily: 'roboto_regular'

    },

});

