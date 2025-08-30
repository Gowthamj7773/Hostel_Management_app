import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, Pressable, Image, TouchableOpacity, Linking, Modal, TextInput, ScrollView } from 'react-native';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function StudentDetails() {
    const hostels = ['All', 'Ganga', 'Yamuna', 'Kaveri', 'Narmadha', 'North Bhavani', 'South Bhavani'];
    const floors = ['All', 'G', '1', '2', '3'];
    const data = 
    {
    "hostel_id": 1,
    "count": 12,
    "students": [
        {
        "student_id": 1,
        "college_id": "7376232CT001",
        "year": 2,
        "name": "Vaishnavi K",
        "email": "vk@example.com",
        "contact": "9876543210",
        "profile_pic": "https://randomuser.me/api/portraits/women/1.jpg",
        "hostel_name": "Ganga",
        "gender": "girls",
        "room_number": "102",
        "floor": "G",
        "wing": "left",
        "fee_status": "No fees pending",
        "father_name": "Mr. K1234567890123456789",
        "guardian_name": "Mrs. K12345678901234567890",
        "father_contact": "9999999999",
        "guardian_contact": "8888888888",
        "attendance_status": "present"
        },
        {
        "student_id": 2,
        "college_id": "7376232CT002",
        "year": 1,
        "name": "Priya Sharma",
        "email": "priya.sharma@example.com",
        "contact": "9876543211",
        "profile_pic": "https://randomuser.me/api/portraits/women/2.jpg",
        "hostel_name": "Yamuna",
        "gender": "girls",
        "room_number": "205",
        "floor": "2",
        "wing": "right",
        "fee_status": "Fees pending",
        "father_name": "Mr. Sharma",
        "guardian_name": "Mrs. Sharma",
        "father_contact": "9999999998",
        "guardian_contact": "8888888887",
        "attendance_status": "absent"
        },
        {
        "student_id": 3,
        "college_id": "7376232CT003",
        "year": 3,
        "name": "Anitha Raj",
        "email": "anitha.raj@example.com",
        "contact": "9876543212",
        "profile_pic": "https://randomuser.me/api/portraits/women/3.jpg",
        "hostel_name": "Kaveri",
        "gender": "girls",
        "room_number": "301",
        "floor": "3",
        "wing": "left",
        "fee_status": "No fees pending",
        "father_name": "Mr. Raj",
        "guardian_name": "Mrs. Raj",
        "father_contact": "9999999997",
        "guardian_contact": "8888888886",
        "attendance_status": "present"
        },
        {
        "student_id": 4,
        "college_id": "7376232CT004",
        "year": 2,
        "name": "Divya Menon",
        "email": "divya.menon@example.com",
        "contact": "9876543213",
        "profile_pic": "https://randomuser.me/api/portraits/women/4.jpg",
        "hostel_name": "Narmadha",
        "gender": "girls",
        "room_number": "108",
        "floor": "1",
        "wing": "right",
        "fee_status": "Fees pending",
        "father_name": "Mr. Menon",
        "guardian_name": "Mrs. Menon",
        "father_contact": "9999999996",
        "guardian_contact": "8888888885",
        "attendance_status": "absent"
        },
        {
        "student_id": 5,
        "college_id": "7376232CT005",
        "year": 1,
        "name": "Lakshmi Devi",
        "email": "lakshmi.devi@example.com",
        "contact": "9876543214",
        "profile_pic": "https://randomuser.me/api/portraits/women/5.jpg",
        "hostel_name": "North Bhavani",
        "gender": "girls",
        "room_number": "204",
        "floor": "2",
        "wing": "left",
        "fee_status": "No fees pending",
        "father_name": "Mr. Devi",
        "guardian_name": "Mrs. Devi",
        "father_contact": "9999999995",
        "guardian_contact": "8888888884",
        "attendance_status": "present"
        },
        {
        "student_id": 6,
        "college_id": "7376232CT006",
        "year": 4,
        "name": "Meera Patel",
        "email": "meera.patel@example.com",
        "contact": "9876543215",
        "profile_pic": "https://randomuser.me/api/portraits/women/6.jpg",
        "hostel_name": "South Bhavani",
        "gender": "girls",
        "room_number": "405",
        "floor": "4",
        "wing": "right",
        "fee_status": "No fees pending",
        "father_name": "Mr. Patel",
        "guardian_name": "Mrs. Patel",
        "father_contact": "9999999994",
        "guardian_contact": "8888888883",
        "attendance_status": "present"
        },
        {
        "student_id": 7,
        "college_id": "7376232CT007",
        "year": 3,
        "name": "Sneha Reddy",
        "email": "sneha.reddy@example.com",
        "contact": "9876543216",
        "profile_pic": "https://randomuser.me/api/portraits/women/7.jpg",
        "hostel_name": "Ganga",
        "gender": "girls",
        "room_number": "312",
        "floor": "3",
        "wing": "right",
        "fee_status": "Fees pending",
        "father_name": "Mr. Reddy",
        "guardian_name": "Mrs. Reddy",
        "father_contact": "9999999993",
        "guardian_contact": "8888888882",
        "attendance_status": "absent"
        },
        {
        "student_id": 8,
        "college_id": "7376232CT008",
        "year": 2,
        "name": "Kavitha Nair",
        "email": "kavitha.nair@example.com",
        "contact": "9876543217",
        "profile_pic": "https://randomuser.me/api/portraits/women/8.jpg",
        "hostel_name": "Yamuna",
        "gender": "girls",
        "room_number": "209",
        "floor": "2",
        "wing": "left",
        "fee_status": "No fees pending",
        "father_name": "Mr. Nair",
        "guardian_name": "Mrs. Nair",
        "father_contact": "9999999992",
        "guardian_contact": "8888888881",
        "attendance_status": "present"
        },
        {
        "student_id": 9,
        "college_id": "7376232CT009",
        "year": 1,
        "name": "Deepika Iyer",
        "email": "deepika.iyer@example.com",
        "contact": "9876543218",
        "profile_pic": "https://randomuser.me/api/portraits/women/9.jpg",
        "hostel_name": "Kaveri",
        "gender": "girls",
        "room_number": "115",
        "floor": "1",
        "wing": "left",
        "fee_status": "Fees pending",
        "father_name": "Mr. Iyer",
        "guardian_name": "Mrs. Iyer",
        "father_contact": "9999999991",
        "guardian_contact": "8888888880",
        "attendance_status": "absent"
        },
        {
        "student_id": 10,
        "college_id": "7376232CT010",
        "year": 4,
        "name": "Ranjitha Kumar",
        "email": "ranjitha.kumar@example.com",
        "contact": "9876543219",
        "profile_pic": "https://randomuser.me/api/portraits/women/10.jpg",
        "hostel_name": "Narmadha",
        "gender": "girls",
        "room_number": "401",
        "floor": "4",
        "wing": "right",
        "fee_status": "No fees pending",
        "father_name": "Mr. Kumar",
        "guardian_name": "Mrs. Kumar",
        "father_contact": "9999999990",
        "guardian_contact": "8888888879",
        "attendance_status": "present"
        },
        {
        "student_id": 11,
        "college_id": "7376232CT011",
        "year": 3,
        "name": "Pooja Gupta",
        "email": "pooja.gupta@example.com",
        "contact": "9876543220",
        "profile_pic": "https://randomuser.me/api/portraits/women/11.jpg",
        "hostel_name": "North Bhavani",
        "gender": "girls",
        "room_number": "308",
        "floor": "3",
        "wing": "left",
        "fee_status": "Fees pending",
        "father_name": "Mr. Gupta",
        "guardian_name": "Mrs. Gupta",
        "father_contact": "9999999989",
        "guardian_contact": "8888888878",
        "attendance_status": "absent"
        },
        {
        "student_id": 12,
        "college_id": "7376232CT012",
        "year": 2,
        "name": "Sushma Pillai",
        "email": "sushma.pillai@example.com",
        "contact": "9876543221",
        "profile_pic": "https://randomuser.me/api/portraits/women/12.jpg",
        "hostel_name": "South Bhavani",
        "gender": "girls",
        "room_number": "210",
        "floor": "2",
        "wing": "right",
        "fee_status": "No fees pending",
        "father_name": "Mr. Pillai",
        "guardian_name": "Mrs. Pillai",
        "father_contact": "9999999988",
        "guardian_contact": "8888888877",
        "attendance_status": "present"
        }
    ]
    }

    const students = data.students;

    const [selectedHostel, setSelectedHostel] = useState('All');
    const [selectedFloor, setSelectedFloor] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [showFloorModal, setShowFloorModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    function getHasAbsent(hostel) {
        if (hostel === 'All') {
        return students.some(student => student.attendance_status === 'absent');
        }
        return students
        .filter(student => student.hostel_name === hostel)
        .some(student => student.attendance_status === 'absent');
    }

    function getStats() {
        let filtered = students;
        if (selectedHostel !== 'All') {
        filtered = filtered.filter(student => student.hostel_name === selectedHostel);
        }
        const total = filtered.length;
        const present = filtered.filter(student => student.attendance_status === 'present').length;
        const absent = total - present;
        return { total, present, absent };
    }

    function getFilteredStudents() {
        let filtered = students;
        if (selectedHostel !== 'All') {
        filtered = filtered.filter(student => student.hostel_name === selectedHostel);
        }
        if (selectedFloor !== 'All') {
        filtered = filtered.filter(student => student.floor === selectedFloor);
        }
        if (selectedStatus !== 'all') {
        filtered = filtered.filter(student => student.attendance_status === selectedStatus);
        }
        if (searchQuery) {
        const queryLower = searchQuery.toLowerCase();
        filtered = filtered.filter(student =>
            student.name.toLowerCase().includes(queryLower) ||
            student.college_id.toLowerCase().includes(queryLower) ||
            student.email.toLowerCase().includes(queryLower)
        );
        }
        return filtered;
    }

    const stats = useMemo(getStats, [selectedHostel]);
    const filteredStudents = useMemo(getFilteredStudents, [selectedHostel, selectedFloor, selectedStatus, searchQuery]);

    function renderStudent({ item, index })
    {
        const isAbsent = item.attendance_status === 'absent';
        const feeColor = item.fee_status === 'No fees pending' ? 'text-lettergreen' : 'text-red-500';
        const dotColor = isAbsent ? 'bg-red-500' : 'bg-lettergreen';
        const borderColor = isAbsent ? 'border-red-300' : 'border-gray-200';

        return (
        <View className={`border ${item.attendance_status === 'absent' ? 'border-red-300':'border-gray-200'} bg-white rounded-lg m-2 p-2`}>
            <View className='flex-row justify-between'>
                <View className='flex'>
                    <View className='flex-row my-1 '>
                        <Text className='font-medium'>{index + 1}.</Text>
                        <Text className='mx-2 font-medium'>{item.name.toUpperCase()}</Text>
                        <Pressable onPress={() => Linking.openURL(`tel:${item.contact}`)}>
                            <MaterialIcons name="call" size={20} color="#4A5B9B" />
                        </Pressable>
                    </View>
                    <View className='flex-row my-1'>
                        <Text className='font-medium text-lettergreen'>{item.hostel_name}</Text>
                        <Text className='font-medium'> | </Text>
                        <Text className='font-medium'>Floor no: </Text>
                        <Text className='font-medium text-lettergreen'>{item.floor}</Text>
                    </View>
                    <View className='flex-row my-1'>
                        <Text className='font-medium'>Room no: </Text>
                        <Text className='font-medium text-lettergreen'>{item.room_number}</Text>
                        <Text className='font-medium'> | </Text>
                        <Text className='font-medium'>Year: </Text>
                        <Text className='font-medium text-lettergreen'>{item.year}</Text>
                    </View>
                    <View className='flex-row my-1'>
                        <Text className='font-medium'>Fee details: </Text>
                        <Text className={`font-medium ${item.fee_status.toLowerCase() === 'fees pending' ? 'text-red-500': 'text-lettergreen'} `}>{item.fee_status}</Text>
                    </View>
                </View>
                <View className='items-center'>
                    <View className='relative'>
                        <Image className='w-16 h-16 rounded-full' source={{uri:item.profile_pic}}/>
                        <View className={`w-3 h-3 rounded-full absolute top-1 -right-0 ${item.attendance_status.toLowerCase() === 'absent'? 'bg-red-500':'bg-green-700'}`}></View>
                    </View>
                    <Text className='mt-2 text-center'>{item.college_id}</Text>
                </View>
            </View>
            <View className='mt-10 mb-5'>
                <Text className='text-lg font-medium text-primary'>Parent's details</Text>
                <View className='flex-row flex-wrap'>
                    <View className='flex-row mr-5 my-2'>
                        <Text>{item.father_name}</Text>
                        <Pressable className='ml-2' onPress={() => Linking.openURL(`tel:${item.contact}`)}>
                                <MaterialIcons name="call" size={20} color="#4A5B9B" />
                        </Pressable>
                    </View>
                    <View className='flex-row my-2'>
                        <Text>{item.father_name}</Text>
                        <Pressable className='ml-2' onPress={() => Linking.openURL(`tel:${item.contact}`)}>
                                <MaterialIcons name="call" size={20} color="#4A5B9B" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
        );
    }

    return (
        <ScreenLayout title='Student Details'>
                {/* Fixed hostel tabs ScrollView */}
                <View className="py-2 my-3">
                    <ScrollView 
                        showsHorizontalScrollIndicator={false} 
                        horizontal={true}
                        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
                    >
                        {hostels.map((hostel) => {
                            const isSelected = selectedHostel === hostel;
                            const hasAbsent = getHasAbsent(hostel);
                            const tabBg = isSelected ? 'bg-[#BFC8D2]' : 'bg-bggray';
                            const textColor = 'text-black';

                            return (
                                <Pressable
                                    key={hostel}
                                    onPress={() => setSelectedHostel(hostel)}
                                    className={`px-4 py-2 rounded-full relative ${tabBg} min-w-max`}
                                >
                                    <Text className={`${textColor} text-md`}>{hostel}</Text>
                                    {hasAbsent && (
                                        <View className="w-[9px] h-[9px] bg-red-500 rounded-full absolute top-0 right-0" />
                                    )}
                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>

                <View className={`flex-row items-end justify-between px-4 py-2 bg-white mt-2`}>
                    { !showSearch &&
                    <View className="flex-row shadow-md bg-white rounded-xl p-2"
                    style={{
                        // Android shadow
                        elevation: 4,
                        // iOS shadow
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                    }}>
                        <Pressable onPress={() => setSelectedStatus('all')} className="mr-6 items-center">
                        <Text className="text-center font-medium text-lg">{stats.total}</Text>
                        <Text className="text-txtyellow font-bold">Total Student</Text>
                        {selectedStatus === 'all' && <View className="h-1 w-12 bg-primary mt-1" />}
                        </Pressable>

                        <Pressable onPress={() => setSelectedStatus('present')} className="mr-6 items-center">
                        <Text className="text-center font-medium text-lg">{stats.present}</Text>
                        <Text className="text-green-700 font-bold">Present</Text>
                        {selectedStatus === 'present' && <View className="h-1 w-12 bg-primary mt-1" />}
                        </Pressable>

                        <Pressable onPress={() => setSelectedStatus('absent')} className="mr-6 items-center">
                        <Text className="text-center font-medium text-lg">{stats.absent}</Text>
                        <Text className="text-red-600 font-bold">Absent</Text>
                        {selectedStatus === 'absent' && <View className="h-1 w-12 bg-primary mt-1" />}
                        </Pressable>
                    </View>
                    }

                    {showSearch && (
                        <View className='w-[80%] flex-row items-center justify-start px-4 py-1 bg-gray-200 rounded-full'>
                            <AntDesign name="search1" size={22} color="#4A5B9B" />
                            <TextInput
                                className="w-full"
                                placeholder="Search by name, roll no ..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        </View>
                    )}

                    <View className='flex-row mr-3 items-center justify-center'>
                        <Pressable
                            onPress={() => setShowFloorModal(true)}
                            className="px-4 py-2 bg-secondary rounded flex-row items-center border border-gray-400"
                        >
                            <Text>{selectedFloor}</Text>
                        </Pressable>
                        {! showSearch &&
                        <Pressable onPress={() => setShowSearch(!showSearch)} className="ml-3">
                            <AntDesign name="search1" size={22} color="#4A5B9B" />
                        </Pressable>
                        }
                    </View>
                </View>
                {filteredStudents?.length === 0 ? (
                    <View className="h-[400px] items-center justify-center">
                        <Text className="text-gray-500 text-lg">No Details found</Text>
                    </View>
                ) : (
                    <FlatList
                        data={filteredStudents}
                        keyExtractor={(item) => item.student_id.toString()}
                        renderItem={renderStudent}
                        className="px-2 mb-5 bg-bggray"
                    />
                )}

                <Modal
                    visible={showFloorModal}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowFloorModal(false)}
                    
                >
                    <Pressable onPress={()=>setShowFloorModal(false)}  className="flex-1 relative">
                        <View className="bg-[#C3D3D8] rounded-lg p-3 rounded-t-lg absolute top-60 right-10">
                            {floors.map((floor) => (
                                <Pressable
                                    key={floor}
                                    onPress={() => {
                                        setSelectedFloor(floor);
                                        setShowFloorModal(false);
                                    }}
                                    className="py-3 px-4"
                                >
                                    <Text className="text-center font-medium text-lg">{floor}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </Pressable>
                </Modal>
        </ScreenLayout>
    );
}