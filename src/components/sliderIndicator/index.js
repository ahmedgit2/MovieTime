import React from 'react';
import { View, Dimensions, Animated } from 'react-native';

import { styles } from './styles';
import { Colors } from '../../assets/colors';
const { width } = Dimensions.get('window');

export function SliderIndicator({ items, scrollX }) {


  return (

    <View style={ styles.Container } >
      {
        items.map((_, i) => {
          const inputRange = [ (i - 1) * (width - 30), i * (width - 30), (i + 1) * (width - 30) ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [ width * 0.02, width * 0.1, width * 0.02 ],
            extrapolate: 'clamp'
          })
          return <Animated.View style={ [ styles.indicator, { width: dotWidth } ] } key={ i.toString() } />
        })
      }
    </View>
  );
}
