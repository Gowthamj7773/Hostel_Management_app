import React from 'react';
import { View, Text, Pressable, ScrollView ,Image} from 'react-native';
import { 
  HomeIcon, 
  UserGroupIcon, 
  UserIcon,
  DocumentTextIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  UserPlusIcon
} from 'react-native-heroicons/outline';
import { router } from 'expo-router';
import { useState } from 'react';

//image import
const mapWarden = require('../../../assets/icons/mapWarden.png')


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
return (
<View className="flex-1 bg-white pt-[48px] px-[20px]">

        <View className="flex-row justify-between items-center mb-[24px]">
        <Pressable
        onPress={() => router.push("/Screen/Profile/Profile")}>
        <Image
            source={require('../../../assets/icons/profile.png')}
            className="w-[42px] h-[42px] rounded-full"
        />
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
    <View className="flex-row gap-3 mb-6">
    {/* Vacant Cot Card */}
    <Pressable className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <View className="flex-row items-center gap-3">
        <View className="bg-blue-100 p-3 rounded-xl">
            <HomeIcon size={24} color="#3B82F6" />
        </View>
        <View className="flex-1">
            <Text className="text-2xl font-bold text-gray-800">500</Text>
            <Text className="text-sm text-gray-500">Vacant cot</Text>
        </View>
        </View>
    </Pressable>

    {/* Student Details Card */}
    <Pressable className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <View className="flex-row items-center gap-3">
        <View className="bg-blue-100 p-3 rounded-xl">
            <UserGroupIcon size={24} color="#3B82F6" />
        </View>
        <View className="flex-1">
            <Text className="text-base font-semibold text-gray-800">Student details</Text>
        </View>
        </View>
    </Pressable>
    </View>

    {/* Warden Details Card */}
    <Pressable className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
    <View className="flex-row items-center gap-3">
        <View className="bg-blue-100 p-3 rounded-xl">
        <UserIcon size={24} color="#3B82F6" />
        </View>
        <Text className="text-base font-semibold text-gray-800">Warden details</Text>
    </View>
    </Pressable>

    {/* My Desk and My Calendar Row */}
    <View className="flex-row justify-between items-center mb-4">
    <View className="flex-1">
        <Text className="text-base font-medium text-gray-700">My desk</Text>
    </View>
    <View className="flex-1">
        <Pressable className="flex-row items-center gap-2">
        <Text className="text-base font-medium text-gray-700">My calendar</Text>
        <CalendarIcon size={20} color="#6B7280" />
        </Pressable>
    </View>
    </View>

    {/* Action Cards Grid */}
    <View className="flex-row gap-3 mb-4">
    {/* Apply Leave */}
    <Pressable className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <View className="items-center gap-3">
        <View className="bg-gray-100 p-4 rounded-xl">
            <DocumentTextIcon size={32} color="#6B7280" />
        </View>
        <Text className="text-base font-medium text-gray-700 text-center">Apply Leave</Text>
        </View>
    </Pressable>

    {/* File Complaint */}
    <Pressable className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <View className="items-center gap-3">
        <View className="bg-gray-100 p-4 rounded-xl">
            <ClipboardDocumentListIcon size={32} color="#6B7280" />
        </View>
        <Text className="text-base font-medium text-gray-700 text-center">File complaint</Text>
        </View>
    </Pressable>
    </View>

    {/* Bottom Action Cards Row */}
    <View className="flex-row gap-3">
    {/* Request Purchase */}
    <Pressable className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <View className="items-center gap-3">
        <View className="bg-gray-100 p-4 rounded-xl">
            <CubeIcon size={32} color="#6B7280" />
        </View>
        <Text className="text-base font-medium text-gray-700 text-center">Request purchase</Text>
        </View>
    </Pressable>

    {/* Assign Work */}
    <Pressable className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <View className="items-center gap-3">
        <View className="bg-gray-100 p-4 rounded-xl">
            <UserPlusIcon size={32} color="#6B7280" />
        </View>
        <Text className="text-base font-medium text-gray-700 text-center">Assign work</Text>
        </View>
    </Pressable>
    </View>
</View>
);
};
