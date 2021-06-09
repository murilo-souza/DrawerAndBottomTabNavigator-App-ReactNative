
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabScreen from './Screens/MainTabScreeen'
import {DrawerContent} from './Screens/DrawerContent'
import SupportScreen from './Screens/SupportScreen'
import SettingsScreen from './Screens/SettingsScreen'
import BookmarkScreen from './Screens/BookmarkScreen'

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        <Drawer.Screen name="SupportScreen" component={SupportScreen}/>
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
