import React from 'react'
import { View, StyleSheet } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props) {
    
    const [isDarkTheme, setIsDarkTheme]= React.useState(false);
    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri: 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Murilo Souza</Title>
                                <Caption style={styles.caption}>@murilo_souza544</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>345</Paragraph>
                                <Caption style={styles.caption}> Seguidores</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>500</Paragraph>
                                <Caption style={styles.caption}> Seguindo</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label='Profile'
                        onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                            name="bookmark-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label='Bookmark'
                        onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                            name="engine-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label='Settings'
                        onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                            name="account-check-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label='Support'
                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft:20,
    },
    title: {
        fontSize:16,
        marginTop: 3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,    
    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,

    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

})
