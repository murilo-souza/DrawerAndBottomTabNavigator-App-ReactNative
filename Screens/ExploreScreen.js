import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            <Text>You're in the Explore screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }
})