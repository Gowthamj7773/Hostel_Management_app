import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function RequestList() {
return (
    <View className='my-2'>
        <Text className="text-gray-600 my-2 font-semibold">07-01-2025</Text>
        <View className="bg-gray-50 p-4 mt-2 rounded-lg shadow border border-gray-200">
        <View className="flex-row justify-between">
            <View>
            <Text className="font-semibold text-gray-900 text-lg">1. LOKITHA K</Text>
            <Text className="text-gray-500 mx-5">Ganga (ground floor)</Text>
            </View>
            <Text className="text-gray-600 t">Room no : 20</Text>
        </View>

            {/* Meal rows */}
            <View className="flex-row justify-between mt-5">
                <View className="items-center flex-1">
                    <Text className="mb-5 text-gray-800 font-semibold">Breakfast</Text>
                    <TouchableOpacity className="bg-primary p-3 rounded-lg">
                        <Text className="text-white text ">Send meal</Text>
                    </TouchableOpacity>
                </View>
                <View className="items-center flex-1">
                    <Text className="mb-5 text-gray-800 font-semibold">Lunch</Text>
                    <TouchableOpacity className="bg-primary p-3 rounded-lg">
                        <Text className="text-white text ">Send meal</Text>
                    </TouchableOpacity>
                </View>
                <View className="items-center flex-1">
                    <Text className="mb-5 text-gray-800 font-semibold">Breakfast</Text>
                    <TouchableOpacity className="bg-primary p-3 rounded-lg">
                        <Text className="text-white text ">Send meal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);
}
