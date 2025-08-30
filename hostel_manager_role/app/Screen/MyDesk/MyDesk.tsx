import React from 'react';
import { View, Text, Pressable, ScrollView ,Image, BackHandler} from 'react-native';
import { router } from 'expo-router';
import { useState ,useEffect } from 'react';
import Notification from '@/app/components/Notification/Notification';

//image import
const mapWarden = require('../../../assets/icons/mapWarden.png')
const bed = require('../../../assets/icons/bed.png')
const student = require('../../../assets/icons/student.png')
const wardenDetails = require('../../../assets/icons/wardenDetails.png')
const calendar = require('../../../assets/icons/calendar.png')
const applyLeave = require('../../../assets/icons/applyleave.png')
const fileComplaint = require('../../../assets/icons/filecomplaint.png')
const requestPurchase = require('../../../assets/icons/requestPurchase.png')
const assignWork = require('../../../assets/icons/assignWork.png')
const backArrowRounded =  require('../../../assets/icons/backarrowrounded.png')

type TaskCardProps = {
number: number;
name: string;
floor: number;
blockRoom: string;
complaint: string;
onResolve: () => void;
};

const getTodayDate = () => {
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();
return `${day}-${month}-${year}`;
};

const todayStr = getTodayDate();

const TaskCard = ({
number,
name,
floor,
blockRoom,
complaint,
onResolve,
}: TaskCardProps) => (
<View className="bg-white rounded-[12px] p-[16px] border border-gray-200 mb-[16px] shadow-sm">
    <View className="flex-row items-center justify-between mb-[4px]">
    <Text className="font-semibold text-[#1F2937] text-[14px]">
        {number}. {name}
    </Text>
    <Text className="text-[#6B7280] text-[13px]">Floor no : {floor}</Text>
    </View>
    <Text className="text-[#6B7280] text-[13px] mb-[4px]">{blockRoom}</Text>
    <Text className="text-[#374151] font-semibold text-[12px] mb-[2px]">
    Complaint type
    </Text>
    <Text className="text-[#4B5563] text-[13px] mb-[8px]">{complaint}</Text>
    <View className="flex-row justify-end">
    <Pressable
        onPress={onResolve}
        className="px-[16px] py-[4px] rounded-[6px] h-9 justify-center bg-bggreen"
    >
        <Text className="text-lettergreen font-semibold text-[13px]">
        Resolve 
        </Text>
    </Pressable>
    </View>
</View>
);

const notifications = [
{
    date: "07-03-2025",
    data: [
    {id: 1, type: "Complaint", message: "Electric issue", status: "Resolved"},
    {
        id: 2,
        type: "Leave",
        message: "05:00 PM - 06:00 PM",
        status: "Approved",
    },
    ],
},
{
    date: "06-03-2025",
    data: [
    {id: 3, type: "Complaint", message: "Water leakage", status: "Pending"},
    ],
},
{
    date: "05-03-2025",
    data: [
    {id: 4, type: "Complaint", message: "Water leakage", status: "Pending"},
    {id: 5, type: "Complaint", message: "Water leakage", status: "Pending"},
    ],
},
{
    date: "04-03-2025",
    data: [
    {id: 6, type: "Complaint", message: "Water leakage", status: "Pending"},
    {id: 7, type: "Complaint", message: "Water leakage", status: "Pending"},
    ],
},
];

const taskData: Record<string, TaskCardProps[]> = {
"05-08-2025": [
    {
    number: 1,
    name: "LOKITHA K (Warden)",
    floor: 1,
    blockRoom: "Ganga | Room no : 103",
    complaint: "Issue with light bulbs",
    onResolve: () => {},
    },
],
"14-03-2025": [
    {
    number: 1,
    name: "LOKITHA K",
    floor: 1,
    blockRoom: "Ganga | Room no : 103",
    complaint: "Issue with light bulbs",
    onResolve: () => {},
    },
    {
    number: 2,
    name: "LOKITHA K",
    floor: 1,
    blockRoom: "Ganga | Room no : 103",
    complaint: "Issue with light bulbs",
    onResolve: () => {},
    },
],
};


export default function MyDesk() {
const [showNotification, setShowNotification] = useState(false);

useEffect(() => {
    const onBackPress = () => {
    if (showNotification) {
        setShowNotification(false);
        return true;
    }
    return false;
    };
    const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    onBackPress
    );
    return () => backHandler.remove();
}, [showNotification]);
return (
    <View className="flex-1 bg-white pt-[48px] px-[20px]">
            <Notification
                visible={showNotification}
                onClose={() => setShowNotification(false)}
                notifications={notifications}
            />
            <View className="flex-row justify-between items-center mb-[24px]">
            <Pressable onPress={() => router.back()}>
                <Image source={backArrowRounded} className="w-[42px] h-[42px] rounded-full"/>
            </Pressable>
            <View className="flex-row">
                <Pressable className="mr-3 bg-[#2A366333] rounded-full w-[42px] h-[42px] items-center justify-center relative" >
                    <Image
                        source={mapWarden}
                        className="w-[24px] h-[24px]"
                    />
                </Pressable>

                <Pressable
                onPress={() => setShowNotification(true)}
                className="bg-[#2A366333] rounded-full w-[40px] h-[40px] items-center justify-center relative"
                >
                <Image
                    source={require("../../../assets/icons/announce.png")}
                    className="w-[24px] h-[24px]"
                />
                {notifications.length > 0 && (
                    <View className="bg-red-600 w-[10px] h-[10px] rounded-full absolute top-[0px] right-[0px]" />
                )}
                </Pressable>
            </View>
        </View>
        {/* Top Cards Row */}
        <View className="flex-row flex-wrap justify-around mb-6">
            {/* Vacant Cot Card */}
            <Pressable
            onPress={() => router.push('/Layout')}
            className="flex-row items-center 
            bg-secondary rounded-[8px] px-[16px] 
            py-[12px] w-[155px] justify-center"
            >
                <Image className="h-5 w-6" source={bed} />
                <Text className="ml-[8px] font-medium text-[#64748B] text-[14px]">
                    {} Vacant cot 
                </Text>
            </Pressable>

            {/* Student Details Card */}
            <Pressable
            onPress={() => router.push('/components/StudentDetails/StudentDetails')}
            className="flex-row items-center 
            bg-secondary rounded-[8px] px-[16px] 
            py-[12px] w-[155px] justify-center"
            >
                <Image className="h-6 w-6" source={student} />
                <Text className="ml-[8px] font-medium text-[#64748B] text-[14px]">
                    Student details
                </Text>
            </Pressable>
        </View>
                    {/* Warden Details Card */}
            <Pressable
            onPress={() => router.push('')}
            className="flex-row items-center ml-3
            bg-secondary rounded-[8px] px-[16px] 
            py-[12px] w-[155px] justify-center"
            >
                <Image className="h-5 w-5" source={wardenDetails} />
                <Text className="ml-[8px] font-medium text-[#64748B] text-[14px]">
                    Warden details
                </Text>
            </Pressable>

        {/* My Desk and My Calendar Row */}
        <View className="flex-row justify-between items-center my-4 ">
            <View className="flex-1">
                <Text className="text-lg font-medium text-gray-500">My desk</Text>
            </View>
            <View className="border p-1 px-2 rounded-lg border-gray-300">
                <Pressable className="flex-row items-center gap-2">
                <Text className="text-lg font-medium text-primary">My calendar</Text>
                <Image className='w-5 h-5' source={calendar}/>
                </Pressable>
            </View>
        </View>

        <View className="flex-row items-center justify-around flex-wrap gap-3 mb-4 ">
            {/* Apply Leave */}
            <Pressable onPress={()=>router.push('/components/Applyleave/LeaveApply')} style={{ shadowColor: '#6B7280', shadowOffset: { width: -2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }} className="my-5 flex items-center justify-center bg-white px-2 rounded-xl border border-white">
                <View className='flex items-center justify-center p-6'>
                    <Image className='h-7 w-7' source={applyLeave}/>
                    <Text className="text-lg  text-primary text-center mt-4">Apply Leave</Text>
                </View>
            </Pressable>

            {/* File Complaint */}
            <Pressable onPress={()=>router.push('/components/FileComplaints/FileComplaints')} style={{ shadowColor: '#6B7280', shadowOffset: { width: -2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }} className="my-5 flex items-center justify-center bg-white px-2 rounded-xl border border-white">
                <View className='flex items-center justify-center p-6'>
                    <Image className='h-7 w-7' source={fileComplaint}/>
                    <Text className="text-lg  text-primary text-center mt-4">File complaint</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=>router.push('/components/Request_purchase/RequestPurchase')} style={{ shadowColor: '#6B7280', shadowOffset: { width: -2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }} className="my-5 flex items-center justify-center bg-white px-2 rounded-xl border border-white">
                <View className='flex items-center justify-center p-2 my-5'>
                    <Image className='h-7 w-7' source={requestPurchase}/>
                    <Text className=" text-primary text-center mt-4">Request Purchase</Text>
                </View>
            </Pressable>

            <Pressable style={{ shadowColor: '#6B7280', shadowOffset: { width: -2, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }} className="my-5 flex items-center justify-center bg-white px-2 rounded-xl border border-white">
                <View className='flex items-center justify-center p-6'>
                    <Image className='h-7 w-7' source={assignWork}/>
                    <Text className="text-lg  text-primary text-center mt-4">Assign work</Text>
                </View>
            </Pressable>
        </View>
    </View>
);
};
