import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native';
import ScreenLayout from '@/app/components/ScreenLayout/ScreenLayout';
const approvedTick = require('../../../assets/icons/approvedtick.png')

export default function ComplaintsScreen() {

    const [seeMore,setSeeMore] = useState(false);
    // Complaint Card 
function ComplaintCard({index,name,hostel,floor,date,issueType,issue,status}){
    return(
    <Pressable onPress={()=>setSeeMore(prev => !prev)} className="bg-white p-4 mt-3 rounded-lg shadow border border-gray-200">
        <View className="flex-row justify-between items-start">
            <View>
                <Text className="text-gray-900 font-semibold">
                    {index}. <Text>{name}</Text>
                </Text>
                <Text className="text-gray-500 text">
                    {hostel} <Text>({floor})</Text>
                </Text>
            </View>
            <Text className="text-gray-500 text font-semibold">{date}</Text>
        </View>
        <Text className="mt-3 text-gray-900 font-semibold">{issueType}</Text>
        {
            seeMore ? 
            <Text className="mt-1 text-gray-600 text leading-5">{issue}</Text> :
            <Text className="mt-1 text-gray-600 text leading-5">{issue.slice(0,50)}<Text>...</Text></Text>
        }
        {
            seeMore ? 
        <View className="bg-bggreen self-end px-3 py-1 rounded-lg mt-3">
            <Text className="text-lettergreen font-medium">{status}</Text>
        </View> :
        <View className="self-end px-3 py-1 rounded-lg mt-3 flex-row items-center">
            <Text className='text-lettergreen'>Resolved</Text>
            <Image className='w-5 h-5 ml-2' source={approvedTick}/>
        </View>
        }

    </Pressable>
    );
}
    return (
        <ScreenLayout title='Complaints'>
    <View className="flex-1 bg-white">
        <ScrollView className="p-4">
            <ComplaintCard index={1} name={'LOKITHA K'} hostel={'Ganga'} floor={'ground floor'} date={'07-01-2025'} issueType={'others'} issue={'I am facing issues with lack of clean drinking water I am facing issues with lack of clean drinking water I am facing issues with lack of clean drinking water'} status={'Resloved'}/>
        </ScrollView>
    </View>
    </ScreenLayout>
    );
}
