import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Pressable, FlatList } from 'react-native';
import ScreenLayout from '@/app/components/ScreenLayout/ScreenLayout';
import ComplaintCard from './ComplaintCard'


export default function ComplaintsScreen() {

const [option,setOption] = useState(0);
const complaint = [
// 🧑‍🎓 Student Complaints
{
role: "student",
name: "ARJUN S",
hostel: "Yamuna",
floor: "first floor",
date: "08-01-2025",
issueType: "maintenance",
issue: "The ceiling fan in my room is not working.",
status: "pending",
},
{
role: "student",
name: "PRIYA R",
hostel: "Saraswati",
floor: "second floor",
date: "09-01-2025",
issueType: "cleanliness",
issue: "The washrooms are not cleaned regularly.",
status: "resolved",
},
{
role: "student",
name: "ROHAN D",
hostel: "Krishna",
floor: "third floor",
date: "14-01-2025",
issueType: "noise",
issue: "Loud noise from the common room late at night.",
status: "pending",
},

// 👩‍💼 Warden Complaints
{
role: "warden",
name: "LOKITHA K",
hostel: "Ganga",
floor: "ground floor",
date: "18-01-2025",
issueType: "electricity",
issue: "Hallway lights are not functioning properly.",
status: "pending",
},
{
role: "warden",
name: "RAJESH K",
hostel: "Saraswati",
floor: "second floor",
date: "19-01-2025",
issueType: "security",
issue: "CCTV cameras near the main entrance are not working.",
status: "resolved",
},

// 🍲 Mess Manager Complaints
{
role: "messManager",
name: "SUNIL M",
hostel: "Central Mess",
floor: "-",
date: "20-01-2025",
issueType: "kitchen",
issue: "Gas stoves are not heating evenly, need maintenance.",
status: "pending",
},
{
role: "messManager",
name: "ANITA P",
hostel: "Central Mess",
floor: "-",
date: "21-01-2025",
issueType: "supplies",
issue: "Shortage of fresh vegetables and fruits this week.",
status: "pending",
},
{
role: "messManager",
name: "RAHUL V",
hostel: "Central Mess",
floor: "-",
date: "22-01-2025",
issueType: "food",
issue: "Students reported rice being undercooked in dinner.",
status: "resolved",
},

// More Students
{
role: "student",
name: "MEERA S",
hostel: "Ganga",
floor: "ground floor",
date: "15-01-2025",
issueType: "internet",
issue: "Wi-Fi is not working in my room.",
status: "resolved",
},
{
role: "student",
name: "ANJALI P",
hostel: "Ganga",
floor: "first floor",
date: "11-01-2025",
issueType: "water",
issue: "There is no hot water in the bathrooms.",
status: "pending",
},
];
const [filteredComplaint , setFilteredComplaint] = useState() // this is for filtering (student,warder,mess)

useEffect(()=>{
    const filter = complaint.filter(c => option ===0 ? c.role === 'student':option===1 ? c.role === 'warden' : option===2 ? c.role === 'messManager' : null)
    setFilteredComplaint(filter);
},[option])

    return (
        <ScreenLayout title='Complaints'>
            <View className="flex-row justify-around mt-10 items-center">
                {['Students', 'Warden', 'Mess'].map((label, idx) => (
                    <Pressable key={label} onPress={() => setOption(idx)} style={{ alignItems: 'center' }}>
                        <Text className={`text-base font-semibold ${option === idx ? 'text-primary text-lg' : 'text-gray-500'}`}>
                            {label}
                        </Text>
                        {option === idx && (
                            <View style={{ height: 2, backgroundColor: '#4A5B9B', width: '80%', marginTop: 4, borderRadius: 1 }} />
                        )}
                    </Pressable>
                ))}
            </View>
            {
                filteredComplaint?.length > 0  ?
    <View className="flex-1 bg-white">
        <FlatList  className='mb-10 mt-5'
        data={filteredComplaint}
        renderItem={({item,index})=>

        <ComplaintCard role={item.role} index={index} name={item.name}
        hostel={item.hostel} floor={item.floor}
        date={item.date} issueType={item.issueType}
        issue={item.issue} status={item.status}
        />}
        
        keyExtractor={(_,index) => index.toString()}
        />
    </View>
    :
    <View className='h-[40%] items-center justify-end'>
    <Text className='text-xl text-gray-500'>No Complaints yet</Text>
    </View>

}
    </ScreenLayout>
    );
}
