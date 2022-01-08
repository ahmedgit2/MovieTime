import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Animated, Dimensions } from 'react-native';

import { MovieCard } from '../movieListItem';

const { height, width } = Dimensions.get('window');

export function NewMovieList({ items = TestData }) {
  return (
    <View style={ { flex: 1, flexDirection: 'row' } }>
      <FlatList
        data={ items }
        keyExtractor={ (x) => x.id.toString() }
        renderItem={ ({ item }) => (
          <MovieCard item={ item }
            cardHeight={ height * .18 }
            cardWidth={ width * 0.24 }
            onPress={ () => {
              // console.log(item.id)/* navigation.navigate('EmployeeDetails', item)*/
            }
            } />
        ) }
        horizontal
        showsHorizontalScrollIndicator={ false }
      />
    </View>
  )
}

const TestData = [
  {
    id: 1,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: `Avenger's End Game`,
    rate: '9.5'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 3,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 5,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 6,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 7,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 8,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 9,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 10,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 11,
    image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
  {
    id: 12,
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    , name: 'movie name',
    rate: '9.5'
  },
]