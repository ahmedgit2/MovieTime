
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export
    const styles = StyleSheet.create({
        Container: {
            flexDirection: 'row',
            height: height * 0.03,
            width: width * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        indicator: {
            margin: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: width * 0.02,
            width: width * 0.02,
            borderRadius: 50,
            elevation: 2,
            backgroundColor: "#ededed"
        },

    })


