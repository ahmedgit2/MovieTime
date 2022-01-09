import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Animated, Dimensions } from 'react-native';

import { SliderItem } from '../sliderItem';
import { SliderIndicator } from '../sliderIndicator';
import { styles } from './styles';

const { height, width } = Dimensions.get('window');

export const Slider = ({ items = TestData }) => {

  const [ currentIndex, setcurrentIndex ] = useState(0);
  const [ autoPlay, setAutoPlay ] = useState(true);
  const [ intervalId, setIntervalId ] = useState(null);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const onMomentumScrollBegin = useRef(() => {
    setAutoPlay(false);
  }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setcurrentIndex(viewableItems[ 0 ].index);
    // console.log('scrolled to image ', viewableItems[ 0 ].index);
  }).current;


  useEffect(() => {
    if (autoPlay) {
      let toIndex = currentIndex;
      if (intervalId === null) {
        const id = window.setInterval(() => {
          if (toIndex < items.length - 1) {
            toIndex++
          } else {
            toIndex = 0
          }
          slideRef.current.scrollToIndex({ animated: true, index: toIndex })
        }, 4000);
        setIntervalId(id);
      }
    } else {
      window.clearInterval(intervalId);
      setIntervalId(null);
      setTimeout(() => {
        setAutoPlay(true);
        console.log("autoPlay :" + autoPlay);
      }, 2000);
    }
    //  console.log("autoPlay :" + autoPlay);
    //console.log("intervalId :" + intervalId);
  }, [ autoPlay ])


  return (
    <View style={ styles.container } >

      <FlatList
        data={ items }
        keyExtractor={ (x) => x.id.toString() }
        renderItem={ ({ item }) => (
          <SliderItem item={ item }
            onPress={ () => {

              // console.log(item.id)/* navigation.navigate('EmployeeDetails', item)*/
            }
            } />
        ) }
        horizontal
        showsHorizontalScrollIndicator={ false }
        pagingEnabled
        bounces={ false }
        onScroll={ Animated.event([ { nativeEvent: { contentOffset: { x: scrollX } } } ],
          { useNativeDriver: false })
        }
        ref={ slideRef }
        initialNumToRender={ 10 }
        onViewableItemsChanged={ viewableItemsChanged }
        onMomentumScrollBegin={ onMomentumScrollBegin }
      />

      <View style={ styles.Indicator }>
        <SliderIndicator items={ items } scrollX={ scrollX } />
      </View>

    </View>
  )
}

const TestData = [
  {
    id: 1,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id: 3,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id: 5,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 6,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id: 7,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 8,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id: 9,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 10,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id: 11,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  },
  {
    id: 12,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
]