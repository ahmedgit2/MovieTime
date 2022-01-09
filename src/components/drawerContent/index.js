import React from 'react';
import { Text, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { getCurrentUserProfile, logOut } from '../../firebase/useFirebase';
import { Colors } from '../../assets/colors';


export function DrawerContent({ name = 'test', navigation, ...props }) {
  const data = getCurrentUserProfile();
  return (

    <View style={{ flex: 1 }} >
      <View style={{ backgroundColor: Colors.white, }}>

        <Text style={{ fontFamily: 'roboto_medium', marginLeft: 15, marginVertical: 20, fontSize: 18, color: Colors.black }}>
          { //data.data.displayName 
            "name here"}
        </Text>
      </View>


      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={Colors.black} size={35} name={'home'} />
        )}
        label="Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={Colors.black} size={35} name={'user'} />
        )}
        label="Profile"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <Entypo color={Colors.black} size={35} name={'new'} />
        )}
        label="News"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={Colors.black} size={35} name={'hearto'} />
        )}
        label="favorate"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={Colors.black} size={35} name={'staro'} />
        )}
        label="recommendations"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={Colors.black} size={35} name={'setting'} />
        )}
        label="sittings"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />


      <View style={{ marginLeft: 8, marginTop: 230 }}>
        <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <AntDesign color={Colors.black} size={30} name={
              focused ? 'logout' : 'logout'} />
          )}
          onPress={async () => {
            await logOut();
            navigation.navigate('LogInScreen');
          }

          }
        />
      </View>
    </View >
  );
}