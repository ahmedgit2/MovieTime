import React from 'react';
import { TouchableHighlight } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Styles } from './styles'
import { Colors } from '../../assets/colors'

export function IconButton(props) {
  const {
    iconName = 'exclamationcircleo',
    iconColor = Colors.black,
    underlayColor = Colors.main,
    size = 30,
  } = props;

  return (
    <TouchableHighlight underlayColor={underlayColor} >
      <AntDesign name={iconName} size={size} color={iconColor} style={{ margin: 6 }} />
    </TouchableHighlight>
  );
}
