import { View, Text ,Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import {Tabs} from 'expo-router'
const homeOutline = require('../../assets/icons/homeOutline.png');
const homePressed = require('../../assets/icons/homePressed.png');

const chatOutline = require('../../assets/icons/chatOutline.png');
const chatPressed = require('../../assets/icons/chatPressed.png');

const layoutOutline = require('../../assets/icons/layoutOutline.png');
const layoutPressed = require('../../assets/icons/layoutPressed.png');

export default function _layout() {
    
return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4A5B9B',
        tabBarLabelStyle: { fontSize: 15 }
    }}
    >
    <Tabs.Screen
        name="home"
        options={{
        tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused ? homePressed : homeOutline}
            style={{ width: 18, height: 18, tintColor: color }} 
            />
        )
        }}
    />
    <Tabs.Screen
        name="Layout"
        options={{
        tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused ? layoutPressed : layoutOutline}
            style={{ width: 18, height: 18, tintColor: color }} 
            />
        )
        }}
    />

    <Tabs.Screen
        name="chat"
        options={{
        tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused ? chatPressed : chatOutline}
            style={{ width: 20, height: 18, tintColor: color }} 
            />
        )
        }}
    />

    </Tabs>

)
}