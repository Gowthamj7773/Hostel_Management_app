import { View, Text,Image } from 'react-native'
import React from 'react'

export default function ChatList({name,image , prevMessageType , prevMessage , prevMessageTime ,unreadMessage}) {
return (
    <View className="flex-row items-center py-3 border-b border-gray-100">
        <Image
            source={{ uri: image }}
            className="w-12 h-12 rounded-full mr-4"
        />
        <View className="flex-1">
            <Text className="font-semibold text-base text-gray-900">{name}</Text>
            <Text className="text-sm text-gray-600">
            {prevMessageType === 'photo' ? '📷 Photo' : prevMessage.slice(0,20)<Text}
            </Text>
        </View>
        <View className="items-end">
            <Text className="text-xs text-gray-400 mb-1">{prevMessageTime}</Text>
            {unreadMessage > 0 && (
            <View className="bg-green-200 rounded-full px-2 py-0.5">
                <Text className="text-xs">{unreadMessage}</Text>
            </View>
            )}
        </View>
    </View>
)
}