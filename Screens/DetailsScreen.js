import React from 'react'
import { View, Text, Button } from 'react-native'

export default function DetailsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Details screen again" onPress={() => navigation.push("Details")}/>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
            <Button title="Go to details" onPress={() => navigation.goBack()}/>
            <Button title="Go to details" onPress={() => navigation.popToTop()}/>
        </View>
    )
}
