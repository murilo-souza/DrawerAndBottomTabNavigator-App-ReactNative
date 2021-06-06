
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to details" onPress={() => navigation.navigate("Details")}/>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details screen again" onPress={() => navigation.push("Details")}/>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
      <Button title="Go to details" onPress={() => navigation.goBack()}/>
      <Button title="Go to details" onPress={() => navigation.popToTop()}/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft:160
            
          },
        }}
        />
        <Stack.Screen name = 'Details' component={DetailsScreen}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft:100
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
