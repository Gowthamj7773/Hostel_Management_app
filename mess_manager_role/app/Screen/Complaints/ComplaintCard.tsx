import { View, Text ,Pressable,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';

const approvedTick = require('../../../assets/icons/approvedtick.png')
const pending = require('../../../assets/icons/clock.png')

    // Complaint Card 
export default function ComplaintCard({index,name,hostel,floor,date,issueType,issue,status}){
        const [seeMore,setSeeMore] = useState(false);
    return(
    <Pressable onPress={()=>setSeeMore(prev => !prev)} className="bg-white p-4 mt-3 mx-5 rounded-lg shadow border border-gray-200">
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
        <View className={`${status === 'pending'? 'bg-yellow-50': 'bg-bggreen'} self-end px-3 py-1 rounded-lg mt-3`}>
            <Text className={`${status==='pending'? 'text-yellow-600':'text-lettergreen'} font-medium`}>{status}</Text>
        </View> :
        <View className="self-end px-3 py-1 rounded-lg mt-3 flex-row items-center">
            <Text className={`${status==='pending'? 'text-yellow-600':'text-lettergreen' }`}>{status}</Text>
            <Image className='w-5 h-5 ml-2' source={status === 'pending'? pending : approvedTick}/>
        </View>
        }

    </Pressable>
    );
}
