import { View,Pressable, Text ,Image} from 'react-native'
import React from 'react'
import { router, Router } from 'expo-router'
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout'
import approvedTick from '../../../assets/icons/approvedtick.png'
import cancel from '../../../assets/icons/cancel.png'

export default function Status() {
  return (
    <View className='my-2'>
      <Text className="text-gray-600 my-2 font-semibold">07-01-2025</Text>
        <View className="bg-bggray p-4 mt-2 rounded-lg shadow">
          <View className="flex-row justify-between">
              <View>
              <Text className="font-semibold text-gray-900 text-lg">1. LOKITHA K</Text>
              <Text className="text-gray-500 mx-5">Ganga (ground floor)</Text>
              </View>
              <Text className="text-gray-600 t">Room no : 20</Text>
          </View>
        <View className="mt-5">
          {[
            { meal: "Breakfast", status: "Received", color: "text-lettergreen", icon: approvedTick },
            { meal: "Lunch", status: "Received", color: "text-lettergreen", icon: approvedTick },
            { meal: "Dinner", status: "Not Received", color: "text-red-500", icon: cancel },
          ].map((item, index) => (
            <View key={index} className="flex-row items-center mb-4">
              <Text className="text-lg w-28">{item.meal}</Text>
              <Text className={`text-lg ${item.color} w-32`}>{item.status}</Text>
              <Image className="h-5 w-5" source={item.icon} />
            </View>
          ))}
        </View>
          
        </View>
    </View>
  )
}