import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(        
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'green',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'purple',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;

function HomeStackScreen({navigation}){
    return (
      <HomeStack.Navigator>
          <HomeStack.Screen name = 'Home' component={HomeScreen}
          options={{
            title:'Home',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
      
            },
            headerTitleAlign: 'center',
            headerLeft: ()=>(
              <Icon.Button name="ios-menu" size={30} backgroundColor="green" 
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
                backgroundColor: 'red',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                
              },
              headerTitleAlign:'center',
              headerLeft: ()=>(
                <Icon.Button name="ios-menu" size={30} backgroundColor="red" 
                  onPress={()=> navigation.openDrawer()}
                ></Icon.Button>
              )
            }}
            />
        </DetailsStack.Navigator>
    )
  }