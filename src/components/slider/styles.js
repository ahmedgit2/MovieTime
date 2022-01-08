
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');

export
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 10,
            overflow: 'hidden'
        },
        Indicator: {
            position: 'absolute',
            alignSelf: 'center',
            bottom: 5,

        }

    })


