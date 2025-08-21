import React, {useState, useEffect} from "react";
import {View, Text, Pressable, Image, BackHandler} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Notification from "../../components/Notification/Notification";
import {router} from "expo-router"; // ✅ Import router
import MealMenuModal from "@/app/components/MealMenu/MealMenuModal";
import requestPurchase from '../../../assets/icons/requestPurchase.png';
import setMeal from '../../../assets/icons/setMeal.png';

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
];

const MyDesk = () => {
const [showMenuModal, setShowMenuModal] = useState(false);
const [showNotification, setShowNotification] = useState(false);

useEffect(() => {
const onBackPress = () => {
    if (showNotification) {
    setShowNotification(false);
    return true; // prevent default back
    }
    if (showMenuModal) {
    setShowMenuModal(false);
    return true;
    }
    router.back(); // ✅ go back if no modal is open
    return true;
};

const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    onBackPress
);
return () => backHandler.remove();
}, [showNotification, showMenuModal]);

return (
<SafeAreaView className="flex-1 bg-white p-5">
    {/* Top Row */}
    <View className="flex-row items-center justify-between mb-10 -mt-[1px]">
    {/* Back arrow */}
    <Pressable
        className="mr-3 h-11 w-11"
        onPress={() => router.back()} // ✅ go back on click
    >
        <Image
        source={require("../../../assets/icons/backarrowrounded.png")}
        className="w-full h-full"
        resizeMode="contain"
        />
    </Pressable>

    <Pressable
        className="w-[42px] h-[42px] bg-[#2A366333] rounded-full items-center justify-center relative"
        onPress={() => setShowNotification(true)}
    >
        <Image
        source={require("../../../assets/icons/announce.png")}
        className="w-7 h-7"
        resizeMode="contain"
        />
        {notifications.length > 0 && (
        <View className="bg-red-600 w-[10px] h-[10px] rounded-full absolute top-[0px] right-[0px]" />
        )}
    </Pressable>
    </View>

    {/* Header row */}
    <View className="flex-row justify-between items-center mb-8">
    <Text className="text-[16px] text-[#2A366399]">My desk</Text>
    <Pressable className="flex-row items-center border border-gray-200 rounded-lg p-2">
        <Text className="text-[16px] text-[#2A366399]">My calendar</Text>
        <Image
        source={require("../../../assets/icons/calendar.png")}
        className="ml-2 w-5 h-5"
        resizeMode="contain"
        />
    </Pressable>
    </View>

    {/* Main Cards */}
<View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
    <Pressable
        onPress={() => router.push("/components/Request_purchase/RequestPurchase")}
        className="items-center p-5 rounded-lg bg-white mb-4"
        style={{
        width: "48%",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        }}
    >
        <Image
        source={requestPurchase}
        className="w-7 h-7 my-3"
        resizeMode="contain"
        />
        <Text className="mt-2 text-[14px] text-primary">Reqeuest Purchase</Text>
    </Pressable>
    <Pressable
        onPress={() => router.push("/components/SetMeal/SetMeal")}
        className="items-center p-5 rounded-lg bg-white mb-4"
        style={{
        width: "48%",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        }}
    >
        <Image
        source={setMeal}
        className="w-7 h-7 my-3"
        resizeMode="contain"
        />
        <Text className="mt-2 text-[14px] text-primary">Set meal</Text>
    </Pressable>
    <Pressable
        onPress={() => router.push("/components/FileComplaints/FileComplaints")}
        className="items-center p-5 rounded-lg bg-white mb-4"
        style={{
        width: "48%",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        }}
    >
        <Image
        source={require("../../../assets/icons/filecomplaint.png")}
        className="w-7 h-7 my-3"
        resizeMode="contain"
        />
        <Text className="mt-2 text-[14px] text-primary">File complaints</Text>
    </Pressable>
    <Pressable
        onPress={() => router.push("/components/Applyleave/LeaveApply")}
        className="items-center p-5 rounded-lg bg-white mb-4"
        style={{
        width: "48%",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        }}
    >
        <Image
        source={require("../../../assets/icons/applyleave.png")}
        className="w-7 h-7 my-3"
        resizeMode="contain"
        />
        <Text className="mt-2 text-[14px] text-primary">Apply leave</Text>
    </Pressable>
</View>
    {/* Notification Modal */}
    <Notification
    visible={showNotification}
    onClose={() => setShowNotification(false)}
    notifications={notifications}
    />
    <MealMenuModal
    visible={showMenuModal}
    onClose={() => setShowMenuModal(false)}
    />
</SafeAreaView>
);
};

export default MyDesk;
