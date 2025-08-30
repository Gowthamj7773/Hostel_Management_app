import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

export default function LayoutCard({hostelDetail, hostelName}) {
    // FIXED: Calculate total vacant from the new structure
    const totalVacant = hostelDetail.floors.reduce((sum, floor) => sum + (floor?.vacant || 0), 0);

    return (
        <View className='my-2 bg-white border border-gray-100 rounded-xl shadow-lg'>
            <View className='p-2'>
                <View className='flex-row justify-between mx-2'>
                    <Text className='text-lg font-medium'>{hostelName} <Text>({totalVacant} vacant)</Text></Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                </View>
                <View className='flex-row justify-between '>
                    {
                        // FIXED: Map over floors array instead of Object.entries
                        hostelDetail.floors.map((floorData, index) => (
                            <View key={index} className="items-center mx-2 my-5">
                                <Image 
                                    className='h-12 w-12 rounded-xl' 
                                    source={{uri: floorData.warden}}
                                />
                                <Pressable 
                                    onPress={() => router.push({
                                        pathname: '/Screen/Layout/[Maps]',
                                        params: {
                                            hostelName: hostelName,
                                            floor: floorData.floor
                                        }
                                    })}
                                >
                                    <Text className='bg-gray-200 p-2 px-4 rounded-xl my-2'>
                                        {floorData.floor}
                                    </Text>
                                </Pressable>
                                <Text className='text-gray-500'>
                                    {floorData.vacant} Vacant
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}