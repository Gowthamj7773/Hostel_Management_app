import { View, Text, Pressable, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout'
import RequestList from './RequestList'
import { SafeAreaView } from 'react-native-safe-area-context'
import Status from './Status'
export default function MealRequest() {

    const [Option,setOption] = useState(0); // for toggling b/w req list and status
    return (
<ScreenLayout title='Meal request'>
    <View className='mx-5 mt-2'>
        <View className='flex-row justify-around'>
        <TouchableOpacity className='py-3 px-2' onPress={()=>setOption(0)}>
            <Text className={`${Option===0 ? 'text-xl text-primary border-b-2 border-primary':'text-gray-500 text-lg'}`}>Request list</Text>
        </TouchableOpacity>    
        <TouchableOpacity className='py-3 px-2' onPress={()=>setOption(1)}>
            <Text className={`${Option===1 ? 'text-xl text-primary border-b-2 border-primary':'text-gray-500 text-lg'}`}>Status</Text>
        </TouchableOpacity>    
        </View>
        <ScrollView className='mt-5'>
            {
                Option === 0 ? <RequestList/> :<Status/>
            }
        </ScrollView>
    </View>
</ScreenLayout>
)
}