import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

export default function Maps() {
  const {hostelName, floor} = useLocalSearchParams()
  return (
    <SafeAreaView>
      <Text> {hostelName} </Text>
      <Text>{floor}</Text>
    </SafeAreaView>
  )
}