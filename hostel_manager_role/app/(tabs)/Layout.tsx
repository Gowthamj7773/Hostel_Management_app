import React, {useState, useEffect} from "react";
import {
View,
BackHandler,
Text,
Pressable,
ScrollView,
Image,
FlatList,
} from "react-native";
import {CalendarDaysIcon, FolderIcon} from "react-native-heroicons/outline";
import Notification from "../components/Notification/Notification";
import MenuModal from "../components/MealMenu/MealMenuModal"; // ✅ Import menu modal
import {router} from "expo-router";
import LayoutCard from "../Screen/Layout/LayoutCard";

//image import
const  fileComplaint =  require( '../../assets/icons/filecomplaint.png')
const approvals  = require( '../../assets/icons/approvals.png')
const bed = require('../../assets/icons/bed.png');
const student  = require('../../assets/icons/student.png')
const purchaseRequest = require('../../assets/icons/purchaseRequest.png')
const plus = require('../../assets/icons/plus.png')
const mapWarden = require('../../assets/icons/mapWarden.png')

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


const role = 'GirlsHostelManager' // assuming role 

// contains both boys and girls hostels layout
const layoutJson =
[
{
"boysHostel": {
    "sapphire": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/0.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/1.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/2.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/3.jpg",
        "vacant": 5
    }
    },
    "coral": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/4.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/5.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/6.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/7.jpg",
        "vacant": 5
    }
    },
    "ruby": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/8.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/9.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/10.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/11.jpg",
        "vacant": 5
    }
    },
    "emerald": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/12.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/13.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/14.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/15.jpg",
        "vacant": 5
    }
    },
    "pearl": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/16.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/17.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/18.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/19.jpg",
        "vacant": 5
    }
    },
    "diamond": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/men/20.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/men/21.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/men/22.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/men/23.jpg",
        "vacant": 5
    }
    }
},
"girlsHostel": {
    "ganga": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/0.jpg",
        "vacant": 1
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/1.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/2.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/3.jpg",
        "vacant": 5
    }
    },
    "yamuna": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/4.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/5.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/6.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/7.jpg",
        "vacant": 5
    }
    },
    "kaveri": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/8.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/9.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/10.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/11.jpg",
        "vacant": 5
    }
    },
    "narmadha": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/12.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/13.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/14.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/15.jpg",
        "vacant": 5
    }
    },
    "northBhavani": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/16.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/17.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/18.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/19.jpg",
        "vacant": 5
    }
    },
    "southBhavani": {
    "G": {
        "warden": "https://randomuser.me/api/portraits/women/20.jpg",
        "vacant": 5
    },
    "1st": {
        "warden": "https://randomuser.me/api/portraits/women/21.jpg",
        "vacant": 5
    },
    "2nd": {
        "warden": "https://randomuser.me/api/portraits/women/22.jpg",
        "vacant": 5
    },
    "3rd": {
        "warden": "https://randomuser.me/api/portraits/women/23.jpg",
        "vacant": 5
    }
    }
}
}
]

const filteredLayoutJson = role === 'BoysHostelManager' ? layoutJson[0].boysHostel : layoutJson[0].girlsHostel

export default function Layout() {
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
            <Text className="text-xl font-medium">Layouts</Text>
                <Pressable
                onPress={() => setShowNotification(true)}
                className="bg-[#2A366333] rounded-full w-[40px] h-[40px] items-center justify-center relative"
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

    {(() => {
    const hostelData =  Object.entries(filteredLayoutJson).map(([hostelName, value]) => ({
        hostelName,
        hostelDetail: value
    }));
    
    return (
        <FlatList 
        data={hostelData}
        keyExtractor={(item, index) => `${item.hostelName}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
            <LayoutCard 
            hostelName={item.hostelName} 
            hostelDetail={item.hostelDetail} 
            />
        )}
        />
    );
    })()}

    </View>
);
}


