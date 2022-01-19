import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors'

const { height, width } = Dimensions.get('window');


export const Styles = StyleSheet.create({

    HeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 10,
        position: 'absolute'
    },


    containerStyle: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: width / 2,
    },
    sliderContainerStyle: {
        borderRadius: width,
        width: width * 2,
        height: width * 2,
        marginLeft: -(width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden'
    },
    Image: {
        height: height,
        width: width,
        position: 'absolute',
        top: height * 0.4,
        marginLeft: width / 2,
        backgroundColor: '#9DD6EB',
        resizeMode: 'contain'

    },
    RightIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 10
    },
    LeftIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15

    },
});

