import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
const homePressed = require('../../assets/icons/homePressed.png');
const chats = require('../../assets/icons/chats.png');
export default function _layout() {
    return (
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'#4A5B9B'}}>
            <Tabs.Screen name='home' options={{tabBarIcon:({color})=>(<Image source={homePressed} className='w-5 h-5' style={{tintColor:color}}/>)}}/>
            <Tabs.Screen name='Chats' options={{tabBarIcon:({color})=>(<Image source={chats} className='w-6 h-5' style={{tintColor:color}}/>)}}/>

        </Tabs>
    )
}