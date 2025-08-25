import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
const homePressed = require('../../assets/icons/homePressed.png');
const homeOutline = require('../../assets/icons/homeOutline.png');

const chatPressed = require('../../assets/icons/chats.png');
const chatOutline = require('../../assets/icons/chatOutline.png');

export default function _layout() {
    return (
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'#4A5B9B'}}>
            <Tabs.Screen name='home' options={{tabBarIcon:({color,focused})=>(<Image source={focused ? homePressed: homeOutline} className='w-5 h-5' style={{tintColor:color}}/>)}}/>
            <Tabs.Screen name='Chats' options={{tabBarIcon:({color,focused})=>(<Image source={focused ? chatPressed : chatOutline} className='w-6 h-5' style={{tintColor:color}}/>)}}/>

        </Tabs>
    )
}