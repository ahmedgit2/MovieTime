import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButton } from '../iconButton';

import { Styles } from './styles'
import { Colors } from '../../assets/colors'

export function HomeHeader(props) {
  const {
    onPressUser = () => { console.warn("Pressed") },
    onPressSearch = () => { console.warn("Pressed") },
    OnPressMenu = () => { console.warn("Pressed") },
  } = props;

  return (
    <View style={ Styles.HeaderContainer } >


      <View style={ Styles.LeftIcons }>
        <TouchableHighlight underlayColor={ Colors.main }>
          <Ionicons name={ 'menu-sharp' } size={ 35 } color={ Colors.black } />
        </TouchableHighlight>
      </View>

      <View style={ Styles.ImageContainer }>
        <Image source={ require("../../assets/images/Logo.png") } style={ Styles.Image } />
      </View>

      <View style={ Styles.RightIcons }>
        <IconButton iconName={ 'search1' } size={ 28 } />
        <IconButton iconName={ 'user' } size={ 28 } />
      </View>


    </View>
  );
}
