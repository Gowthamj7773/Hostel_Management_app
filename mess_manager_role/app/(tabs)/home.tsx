import React, {useState, useEffect} from "react";
import {
  View,
  BackHandler,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import {CalendarDaysIcon, FolderIcon} from "react-native-heroicons/outline";
import Notification from "../components/Notification/Notification";
import MenuModal from "../components/MealMenu/MealMenuModal"; // ✅ Import menu modal
import {router} from "expo-router";

//image import
const  fileComplaint =  require( '../../assets/icons/filecomplaint.png')
const mealRequest  = require( '../../assets/icons/mealRequest.png')

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

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false); // ✅ state for menu modal

  useEffect(() => {
    const onBackPress = () => {
      if (showNotification) {
        setShowNotification(false);
        return true;
      }
      if (showMenuModal) {
        setShowMenuModal(false);
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );
    return () => backHandler.remove();
  }, [showNotification, showMenuModal]);

  return (
    <View className="flex-1 bg-white pt-[48px] px-[20px]">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center mb-[24px]">
        <Pressable
          onPress={() => router.push("/Screen/Profile/Profile")}>
          <Image
            source={require('../../assets/icons/profile.png')}
            className="w-[42px] h-[42px] rounded-full"
          />
        </Pressable>

        <Pressable
          onPress={() => setShowNotification(true)}
          className="bg-[#2A366333] rounded-full w-[42px] h-[42px] items-center justify-center relative"
        >
          <Image
            source={require("../../assets/icons/announce.png")}
            className="w-[24px] h-[24px]"
          />
          {notifications.length > 0 && (
            <View className="bg-red-600 w-[10px] h-[10px] rounded-full absolute top-[0px] right-[0px]" />
          )}
        </Pressable>
      </View>

      {/* Calendar & Desk Buttons */}
      <View className="mt-6 flex-row justify-between mb-[24px]">
        <Pressable
          className="flex-row items-center 
        bg-[#F1F5F9] rounded-[8px] px-[16px] py-[12px] w-[155px] justify-center"
        >
          <CalendarDaysIcon size={20} color="#64748B" />
          <Text className="ml-[8px] font-medium text-[#64748B] text-[14px]">
            My calendar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/Screen/MyDesk/MyDesk")}
          className="flex-row items-center 
        bg-[#F1F5F9] rounded-[8px] px-[16px] 
        py-[12px] w-[155px] justify-center"
        >
          <FolderIcon size={20} color="#64748B" />
          <Text className="ml-[8px] font-medium text-[#64748B] text-[14px]">
            My desk
          </Text>
        </Pressable>
      </View>
    <View className="flex-row justify-around mt-6">
      <Pressable onPress={()=>router.push('/Screen/Complaints/Complaint')}
        className="items-center justify-center h-[105px] w-[153px] rounded-lg mx-2 bg-white"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Image className="w-6 h-6" source={fileComplaint} />
        <Text className="text-lg mt-3 text-primary">Complaints</Text>
      </Pressable>

      <Pressable
        onPress={()=>{router.push('/Screen/MealRequest/MealRequest')}}
        className="items-center justify-center h-[105px] w-[153px] rounded-lg mx-2 bg-white"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Image className="w-6 h-6" source={mealRequest} />
        <Text className="text-lg mt-3 text-primary">Meal requests</Text>
      </Pressable>
    </View>
      {/* Floating Buttons */}
      <View className="absolute bottom-[32px] right-[16px]">
        <Pressable onPress={()=>router.push('/Screen/Status/Status')}
          className="h-[56px] w-[56px] bg-primary 
        mb-4 justify-center items-center rounded-2xl"
        >
          <Image
            source={require("../../assets/icons/status.png")}
            className="w-full h-full"
          />
        </Pressable>
        <Pressable
          className="h-[56px] w-[56px] bg-primary justify-center items-center rounded-2xl"
          onPress={() => setShowMenuModal(true)} // ✅ open menu modal
        >
          <Image
            source={require("../../assets/icons/menu.png")}
            className="w-full h-full"
          />
        </Pressable>
      </View>

      {/* Modals */}
      <Notification
        visible={showNotification}
        onClose={() => setShowNotification(false)}
        notifications={notifications}
      />

      <MenuModal
        visible={showMenuModal}
        onClose={() => setShowMenuModal(false)}
      />
    </View>
  );
}
