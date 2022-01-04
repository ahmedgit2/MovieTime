import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Colors } from '../../assets/colors';

export function Slider({ dataArg }) {

  return (

    <View style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </View>
  );
}
