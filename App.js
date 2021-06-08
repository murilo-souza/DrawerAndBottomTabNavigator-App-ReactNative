
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({navigation}){
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name = 'Home' component={HomeScreen}
        options={{
          title:'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
    
          },
          headerTitleAlign: 'center',
          headerLeft: ()=>(
            <Icon.Button name="ios-menu" size={30} backgroundColor="#f4511e" 
              onPress={()=> navigation.openDrawer()}
            ></Icon.Button>
          )
        }}
        />
        
      </HomeStack.Navigator>
  )
}

function DetailsStackScreen({navigation}){
  return(
    <DetailsStack.Navigator>
      <DetailsStack.Screen name = 'Details' component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              
            },
            headerTitleAlign:'center',
            headerLeft: ()=>(
              <Icon.Button name="ios-menu" size={30} backgroundColor="#f4511e" 
                onPress={()=> navigation.openDrawer()}
              ></Icon.Button>
            )
          }}
          />
      </DetailsStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator inicialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Details" component={DetailsStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
