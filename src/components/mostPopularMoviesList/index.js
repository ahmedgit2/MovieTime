import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MovieCard } from '../movieListItem';
import axios from 'axios';
import { apiKey } from '../../api/apiKey';

export function MostPopularMoviesList({ items = TestData }) {
  const [movies, setMovies] = useState({});
  //console.log(movies);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        setMovies(response.data.results)
      });
  }, [])

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <FlatList
        data={movies}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({ item }) => (
          <MovieCard item={item}
            onPress={() => {
              navigation.navigate('MovieDetailsScreen', item.id)
            }
            } />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
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