import React, { useState } from 'react';
import { View, Image, Pressable, SafeAreaView } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

import { Styles } from './styles';
import { Colors } from '../../assets/colors';

export const MovieDetailsHeader = (props) => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)

  const {
    img,
    OnPressBack = () => { navigation.goBack() },
    onPressSetting = () => { console.warn("Pressed") },
  } = props;

  const onPressFavorite = () => {
    setIsFavorite(!isFavorite);

  }

  return (
    <SafeAreaView style={{ flex: 1, }}>

      <View style={Styles.containerStyle} >
        <View style={Styles.sliderContainerStyle} >

          <Image
            source={{
              uri: img
            }}
            style={Styles.Image}
          />
        </View>
      </View>

      <View style={Styles.HeaderContainer}>

        <View style={Styles.LeftIcons}>
          <Pressable onPress={OnPressBack}>
            <MaterialIcons
              name={'arrow-back-ios'}
              size={25}
              color={Colors.white}
              style={{ padding: 5 }}
            />
          </Pressable>
        </View>


        <View style={Styles.RightIcons}>

          <Pressable
            onPress={onPressFavorite}>
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={23}
              color={isFavorite ? Colors.main : Colors.white}
              style={{ marginRight: 7, padding: 5 }}
            />

          </Pressable>


          <Pressable >
            <Entypo
              name={'dots-three-vertical'}
              size={23} color={Colors.white}
            />
          </Pressable>

        </View>
      </View>


    </SafeAreaView >
  );
}

