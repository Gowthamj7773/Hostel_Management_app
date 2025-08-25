import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Pressable, FlatList } from 'react-native';
import ScreenLayout from '@/app/components/ScreenLayout/ScreenLayout';
import ComplaintCard from './ComplaintCard'


export default function ComplaintsScreen() {

const complaint = [
    {
        name: 'LOKITHA K',
        hostel: 'Ganga',
        floor: 'ground floor',
        date: '07-01-2025',
        issueType: 'others',
        issue: 'I am facing issues with lack of clean drinking water.',
        status: 'resolved',
    },
    {
        name: 'ARJUN S',
        hostel: 'Yamuna',
        floor: 'first floor',
        date: '08-01-2025',
        issueType: 'maintenance',
        issue: 'The ceiling fan in my room is not working.',
        status: 'pending',
    },
    {
        name: 'PRIYA R',
        hostel: 'Saraswati',
        floor: 'second floor',
        date: '09-01-2025',
        issueType: 'cleanliness',
        issue: 'The washrooms are not cleaned regularly.',
        status: 'resolved',
    },
    {
        name: 'RAHUL M',
        hostel: 'Krishna',
        floor: 'third floor',
        date: '10-01-2025',
        issueType: 'food',
        issue: 'The food served in the mess is cold and tasteless.',
        status: 'pending',
    },
    {
        name: 'ANJALI P',
        hostel: 'Ganga',
        floor: 'first floor',
        date: '11-01-2025',
        issueType: 'water',
        issue: 'There is no hot water in the bathrooms.',
        status: 'pending',
    },
    {
        name: 'VIKRAM T',
        hostel: 'Yamuna',
        floor: 'ground floor',
        date: '12-01-2025',
        issueType: 'electricity',
        issue: 'Frequent power cuts in the evening.',
        status: 'pending',
    },
    {
        name: 'SNEHA L',
        hostel: 'Saraswati',
        floor: 'second floor',
        date: '13-01-2025',
        issueType: 'security',
        issue: 'The main gate security is often absent at night.',
        status: 'resolved',
    },
    {
        name: 'ROHAN D',
        hostel: 'Krishna',
        floor: 'third floor',
        date: '14-01-2025',
        issueType: 'noise',
        issue: 'Loud noise from the common room late at night.',
        status: 'pending',
    },
    {
        name: 'MEERA S',
        hostel: 'Ganga',
        floor: 'ground floor',
        date: '15-01-2025',
        issueType: 'internet',
        issue: 'Wi-Fi is not working in my room.',
        status: 'resolved',
    },
    {
        name: 'KARAN J',
        hostel: 'Yamuna',
        floor: 'first floor',
        date: '16-01-2025',
        issueType: 'others',
        issue: 'Broken window in the corridor.',
        status: 'resolved',
    },
    ]

    return (
        <ScreenLayout title='Complaints'>
    <View className="flex-1 bg-white">
        <FlatList  className='mb-10 mt-5'
        data={complaint}
        renderItem={({item,index})=>

        <ComplaintCard index={index+1} name={item.name}
        hostel={item.hostel} floor={item.floor}
        date={item.date} issueType={item.issueType}
        issue={item.issue} status={item.status}
        />}
        
        keyExtractor={(_,index) => index.toString()}
        />
    </View>
    </ScreenLayout>
    );
}
