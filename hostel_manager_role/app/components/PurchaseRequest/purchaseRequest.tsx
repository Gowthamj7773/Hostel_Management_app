// PurchaseRequests.js
import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, FlatList, Pressable } from 'react-native';
import RequestCard from './RequestCard';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

export default function PurchaseRequests() {
  // Variables declared at top for code readability
    const userRole = 'girlsHostelManager'; // This would come from user context/props
    const [selectedTab, setSelectedTab] = useState('All');
    
    const boysHostel = ['sapphire', 'coral', 'emerald', 'pearl', 'ruby', 'diamond'];
    const girlsHostel = ['ganga', 'yamuna', 'kaveri', 'narmadha', 'north bhavani', 'south bhavani'];
    
    const purchaseRequestData = [
        {
        "requestId": "PR001",
        "requester": {
            "name": "Priya Sharma",
            "role": "warden",
            "hostel": "ganga",
            "floor": "1",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "date": "2025-01-07",
        "time": "16:30",
        "products": [
            { "name": "door lock", "quantity": 2 },
            { "name": "closet handle", "quantity": 3 },
            { "name": "closet handle", "quantity": 3 },
            { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
                { "name": "door lock", "quantity": 2 },
        { "name": "closet handle", "quantity": 3 },
        ],
        "status": "pending"
        },
        {
        "requestId": "PR002", 
        "requester": {
            "name": "Rajesh Kumar",
            "role": "warden",
            "hostel": "sapphire",
            "floor": "2", 
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "date": "2025-01-07",
        "time": "09:15",
        "products": [
            { "name": "ceiling fan", "quantity": 1 },
            { "name": "tube light", "quantity": 4 }
        ],
        "status": "approved"
        },
        {
        "requestId": "PR003",
        "requester": {
            "name": "Vikram Singh", 
            "role": "boys_mess_manager",
            "hostel": "mess",
            "floor": "all",
            "wing": "all",
            "profilePic": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "date": "2025-01-06",
        "time": "16:45", 
        "products": [
            { "name": "steel plates", "quantity": 50 },
            { "name": "serving spoons", "quantity": 20 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR004",
        "requester": {
            "name": "Sunita Patel",
            "role": "girls_mess_manager", 
            "hostel": "mess",
            "floor": "all",
            "wing": "all",
            "profilePic": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "date": "2025-01-07",
        "time": "11:20",
        "products": [
            { "name": "dining tables", "quantity": 5 },
            { "name": "chairs", "quantity": 30 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR005",
        "requester": {
            "name": "Meera Nair",
            "role": "warden", 
            "hostel": "yamuna",
            "floor": "3",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "date": "2025-01-07",
        "time": "08:00",
        "products": [
            { "name": "bed sheets", "quantity": 20 },
            { "name": "pillows", "quantity": 10 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR006",
        "requester": {
            "name": "Amit Verma",
            "role": "warden",
            "hostel": "diamond", 
            "floor": "ground",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "date": "2025-01-05", 
        "time": "13:10",
        "products": [
            { "name": "water cooler", "quantity": 1 },
            { "name": "floor mats", "quantity": 8 },
            { "name": "wall clock", "quantity": 2 }
        ],
        "status": "approved"
        },
        {
        "requestId": "PR007",
        "requester": {
            "name": "Kavya Reddy",
            "role": "warden",
            "hostel": "kaveri",
            "floor": "2",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "date": "2025-01-05",
        "time": "10:30",
        "products": [
            { "name": "study chairs", "quantity": 15 },
            { "name": "desk lamps", "quantity": 10 },
            { "name": "power strips", "quantity": 8 },
            { "name": "waste bins", "quantity": 12 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR008",
        "requester": {
            "name": "Rohit Jain",
            "role": "warden",
            "hostel": "coral",
            "floor": "1",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "date": "2025-01-04",
        "time": "14:20",
        "products": [
            { "name": "bathroom mirrors", "quantity": 6 },
            { "name": "shower curtains", "quantity": 8 }
        ],
        "status": "rejected"
        },
        {
        "requestId": "PR009",
        "requester": {
            "name": "Anjali Singh",
            "role": "warden",
            "hostel": "narmadha",
            "floor": "3",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "date": "2025-01-04",
        "time": "09:45",
        "products": [
            { "name": "mattresses", "quantity": 12 },
            { "name": "bed frames", "quantity": 6 },
            { "name": "wardrobes", "quantity": 4 },
            { "name": "study tables", "quantity": 8 },
            { "name": "bookshelves", "quantity": 6 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR010",
        "requester": {
            "name": "Karan Patel",
            "role": "warden",
            "hostel": "emerald",
            "floor": "ground",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "date": "2025-01-03",
        "time": "15:00",
        "products": [
            { "name": "washing machines", "quantity": 2 },
            { "name": "iron boards", "quantity": 4 },
            { "name": "buckets", "quantity": 20 }
        ],
        "status": "approved"
        },
        {
        "requestId": "PR011",
        "requester": {
            "name": "Deepika Rao",
            "role": "warden",
            "hostel": "north bhavani",
            "floor": "2",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "date": "2025-01-03",
        "time": "11:15",
        "products": [
            { "name": "air conditioners", "quantity": 3 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR012",
        "requester": {
            "name": "Arjun Krishnan",
            "role": "warden",
            "hostel": "pearl",
            "floor": "1",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "date": "2025-01-02",
        "time": "17:30",
        "products": [
            { "name": "wifi routers", "quantity": 2 },
            { "name": "ethernet cables", "quantity": 50 },
            { "name": "network switches", "quantity": 1 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR013",
        "requester": {
            "name": "Pooja Gupta",
            "role": "warden",
            "hostel": "south bhavani",
            "floor": "ground",
            "wing": "right",
            "profilePic": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "date": "2025-01-02",
        "time": "12:45",
        "products": [
            { "name": "fire extinguishers", "quantity": 4 },
            { "name": "smoke detectors", "quantity": 8 },
            { "name": "first aid kits", "quantity": 6 },
            { "name": "emergency lights", "quantity": 10 }
        ],
        "status": "approved"
        },
        {
        "requestId": "PR014",
        "requester": {
            "name": "Sanjay Kumar",
            "role": "warden",
            "hostel": "ruby",
            "floor": "3",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "date": "2025-01-01",
        "time": "16:00",
        "products": [
            { "name": "recreational equipment", "quantity": 15 },
            { "name": "sports balls", "quantity": 8 },
            { "name": "board games", "quantity": 10 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR015",
        "requester": {
            "name": "Lakshmi Iyer",
            "role": "girls_mess_manager",
            "hostel": "mess",
            "floor": "all",
            "wing": "all",
            "profilePic": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "date": "2025-01-01",
        "time": "10:30",
        "products": [
            { "name": "industrial stove", "quantity": 1 },
            { "name": "pressure cookers", "quantity": 5 },
            { "name": "kitchen knives", "quantity": 12 },
            { "name": "cutting boards", "quantity": 8 },
            { "name": "storage containers", "quantity": 25 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR016",
        "requester": {
            "name": "Rahul Sharma",
            "role": "boys_mess_manager",
            "hostel": "mess",
            "floor": "all",
            "wing": "all",
            "profilePic": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "date": "2024-12-30",
        "time": "14:15",
        "products": [
            { "name": "refrigerator", "quantity": 1 },
            { "name": "microwave ovens", "quantity": 2 }
        ],
        "status": "approved"
        },
        {
        "requestId": "PR017",
        "requester": {
            "name": "Sneha Patil",
            "role": "warden",
            "hostel": "ganga",
            "floor": "ground",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "date": "2024-12-29",
        "time": "09:00",
        "products": [
            { "name": "security cameras", "quantity": 4 },
            { "name": "door sensors", "quantity": 12 },
            { "name": "intercom system", "quantity": 1 }
        ],
        "status": "pending"
        },
        {
        "requestId": "PR018",
        "requester": {
            "name": "Vishal Agarwal",
            "role": "warden",
            "hostel": "diamond",
            "floor": "1",
            "wing": "left",
            "profilePic": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "date": "2024-12-28",
        "time": "18:20",
        "products": [
            { "name": "computer desks", "quantity": 8 },
            { "name": "office chairs", "quantity": 8 },
            { "name": "desktop computers", "quantity": 4 },
            { "name": "printers", "quantity": 1 },
            { "name": "paper supplies", "quantity": 50 },
            { "name": "stationery items", "quantity": 100 }
        ],
        "status": "approved"
        }
    ];



    // Filter requests based on user role
    const relevantHostels = userRole === 'boysHostelManager' ? boysHostel : girlsHostel;
    const filteredRequests = useMemo(() => {
        return purchaseRequestData.filter(request => {
        if (userRole === 'boysHostelManager') {
            return boysHostel.includes(request.requester.hostel) || 
                request.requester.role === 'boys_mess_manager';
        } else {
            return girlsHostel.includes(request.requester.hostel) || 
                request.requester.role === 'girls_mess_manager';
        }
        });
    }, [userRole]);

  // Get requests for selected tab - ONLY PENDING REQUESTS
    const getRequestsForTab = () => {
        let tabFilteredRequests;
        
        if (selectedTab === 'All') {
        tabFilteredRequests = filteredRequests;
        } else if (selectedTab === 'Mess') {
        const messRole = userRole === 'boysHostelManager' ? 'boys_mess_manager' : 'girls_mess_manager';
        tabFilteredRequests = filteredRequests.filter(req => req.requester.role === messRole);
        } else {
        tabFilteredRequests = filteredRequests.filter(req => req.requester.hostel === selectedTab.toLowerCase());
        }
    
    // Filter to only show pending requests
return tabFilteredRequests.filter(req => req.status === 'pending');
};

  // Check if hostel has pending requests
    const hasPendingRequests = (hostelName) => {
        return filteredRequests.some(req => 
        req.requester.hostel === hostelName.toLowerCase() && req.status === 'pending'
        );
    };

  // Group requests by date
    const groupedRequests = useMemo(() => {
        const requests = getRequestsForTab();
        const grouped = {};
        
        requests.forEach(request => {
        if (!grouped[request.date]) {
            grouped[request.date] = [];
        }
        grouped[request.date].push(request);
        });

        // Sort by date descending
        Object.keys(grouped).forEach(date => {
        grouped[date].sort((a, b) => a.time.localeCompare(b.time));
        });

        return grouped;
    }, [selectedTab, filteredRequests]);

  // Format time to 12-hour format
    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    };

    // Format date
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    };

    const handleReject = (requestId) => {
        Alert.alert(
        "Confirm Rejection",
        "Are you sure you want to reject this purchase request?",
        [
            { text: "Cancel", style: "cancel" },
            { text: "Reject", style: "destructive", onPress: () => {
            // TODO: Implement reject functionality
            console.log(`Rejected request: ${requestId}`);
            }}
        ]
        );
    };

    const handleRequestPurchase = (requestId) => {
        // TODO: Implement approve functionality
        console.log(`Approved request: ${requestId}`);
    };

return (
    <ScreenLayout title='Purchase request'>
    <View className="flex-1 bg-bggray">
    {/* Header Tabs */}
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="max-h-16 mt-[20px]"
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
    >
        <Pressable
            onPress={() => setSelectedTab('All')}
            className={`px-4 py-2 rounded-full mr-3 ${selectedTab === 'All' ? 'bg-gray-300' : 'bg-secondary'}`}
        >
        <Text className={`font-medium text-black`}>            
            All
        </Text>
        </Pressable>

        <Pressable
            onPress={() => setSelectedTab('Mess')}
            className={`px-4 py-2 rounded-full mr-3 relative ${selectedTab === 'Mess' ? 'bg-gray-300' : 'bg-secondary'}`}
        >
            <Text className={`font-medium text-black`}>
            Mess
            </Text>
            {filteredRequests.some(req => 
            (userRole === 'boysHostelManager' ? req.requester.role === 'boys_mess_manager' : req.requester.role === 'girls_mess_manager') && 
            req.status === 'pending'
            ) && (
            <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            )}
        </Pressable>

        {relevantHostels.map((hostel) => (
            <Pressable
            key={hostel}
            onPress={() => setSelectedTab(hostel.charAt(0).toUpperCase() + hostel.slice(1))}
            className={`px-4 py-2 rounded-full mr-3 relative  ${
                selectedTab === hostel.charAt(0).toUpperCase() + hostel.slice(1) ? 'bg-gray-300' : 'bg-secondary'
            }`}
            >
            <Text className={`font-medium `}>
                {hostel.charAt(0).toUpperCase() + hostel.slice(1)}
            </Text>
            {hasPendingRequests(hostel) && (
                <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            )}
            </Pressable>
        ))}
    </ScrollView>

    {/* Requests List */}
    <ScrollView className="flex-1 px-4">
        {Object.keys(groupedRequests).length === 0 ? (
        <View className="h-[600px] justify-center items-center py-20">
            <Text className="text-gray-500 text-lg">No requests found</Text>
        </View>
        ) : (
        Object.keys(groupedRequests)
            .sort((a, b) => b.localeCompare(a)) // Sort dates descending
            .map((date) => (
            <View key={date} className="mb-6">
                <Text className="text-lg text-gray-800 mb-2">
                {formatDate(date)}
                </Text>
                
                <FlatList
                data={groupedRequests[date]}
                keyExtractor={(item) => item.requestId}
                renderItem={({ item, index }) => (
                    <View className="mb-4">
                    <Text className="text-right text-gray-500 text-sm mb-2">
                        {formatTime(item.time)}
                    </Text>
                    <RequestCard
                        request={item}
                        index={index + 1}
                        onReject={() => handleReject(item.requestId)}
                        onApprove={() => handleRequestPurchase(item.requestId)}
                    />
                    </View>
                )}
                scrollEnabled={false}
                />
            </View>
            ))
        )}
    </ScrollView>
    </View>
    </ScreenLayout>
);
}