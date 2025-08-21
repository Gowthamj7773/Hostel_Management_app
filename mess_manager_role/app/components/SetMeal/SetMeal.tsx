import { View, Text, Pressable, Image, Alert, Platform, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import DateTimePicker from '@react-native-community/datetimepicker';
const calendar = require('../../../assets/icons/calendar.png');

export default function SetMeal() {
  const [fromDate, setFromDate] = useState(new Date('2025-08-20T10:00:00+05:30')); // Starting with current date and time
  const [toDate, setToDate] = useState(new Date('2025-08-20T10:00:00+05:30')); // Starting with current date and time
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [options, setOptions] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const menu = {
    Breakfast: ['Bread', 'Jam', 'Butter', 'Semiya upma', 'Coconut Chutney'],
    Lunch: ['Rice', 'Dal', 'Vegetable Curry', 'Chapati', 'Pickle'],
    Dinner: ['Roti', 'Paneer', 'Salad', 'Curd', 'Papad'],
  };

  const handleDateChange = (type, event, selectedDate) => {
    if (selectedDate) {
      if (type === 'from') {
        setFromDate(selectedDate);
        setShowFromPicker(Platform.OS === 'ios');
        // Reset checkedItems when date changes
        setCheckedItems({});
        setSelectedDay('');
      } else {
        setToDate(selectedDate);
        setShowToPicker(Platform.OS === 'ios');
        // Reset checkedItems when date changes
        setCheckedItems({});
        setSelectedDay('');
      }
    } else {
      if (type === 'from') setShowFromPicker(false);
      else setShowToPicker(false);
    }
  };

  const toggleCheck = (mealType, item) => {
    if (fromDate && toDate && selectedDay) {
      setCheckedItems((prev) => {
        // Create a completely new structure for the selected day
        const newCheckedItems = { ...prev };
        
        // Initialize the day if it doesn't exist
        if (!newCheckedItems[selectedDay]) {
          newCheckedItems[selectedDay] = { 
            Breakfast: {}, 
            Lunch: {}, 
            Dinner: {} 
          };
        }
        
        // Initialize the meal type if it doesn't exist
        if (!newCheckedItems[selectedDay][mealType]) {
          newCheckedItems[selectedDay][mealType] = {};
        }
        
        // Toggle the specific item for this specific day
        newCheckedItems[selectedDay][mealType][item] = !newCheckedItems[selectedDay][mealType][item];
        
        return newCheckedItems;
      });
    }
  };

  const calculateDays = () => {
    if (!fromDate || !toDate) return [];
    const from = new Date(fromDate);
    const to = new Date(toDate);
    
    // Ensure from date is not after to date
    if (from > to) return [];
    
    const diffTime = Math.abs(to - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Include both start and end days
    const days = [];
    
    for (let d = 0; d < diffDays; d++) {
      const day = new Date(from);
      day.setDate(from.getDate() + d);
      
      // Create a unique key that includes the full date to ensure uniqueness
      const dayKey = `${day.toLocaleDateString('en-US', { weekday: 'long' })} ${day.toLocaleDateString('en-GB')}`;
      days.push(dayKey);
    }
    return days;
  };

  const days = calculateDays();
  const currentDate = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'); // Dynamic current date
  const dayName = new Date(currentDate.split('-').reverse().join('-')).toLocaleDateString('en-US', { weekday: 'long' });

  // Reset selectedDay when days change
  useEffect(() => {
    if (days.length > 0) {
      setSelectedDay(days[0]); // Always set to first day when days change
    } else {
      setSelectedDay('');
    }
  }, [days.join(',')]); // Use join to create a stable dependency

  // Initialize checkedItems structure for all days when days change
  useEffect(() => {
    if (days.length > 0) {
      setCheckedItems(prevItems => {
        const newCheckedItems = {};
        
        // Initialize structure for each day independently
        days.forEach((day) => {
          newCheckedItems[day] = {
            Breakfast: {},
            Lunch: {},
            Dinner: {}
          };
        });
        
        return newCheckedItems;
      });
    }
  }, [days.join(',')]); // Use join to create a stable dependency

  const handleSetMeal = () => {
    if (!fromDate || !toDate) {
      Alert.alert('Error', 'No dates have been set');
      return;
    }

    if (days.length === 0) {
      Alert.alert('Error', 'No valid date range selected');
      return;
    }

    const missing = [];
    days.forEach((day) => {
      ['Breakfast', 'Lunch', 'Dinner'].forEach((meal) => {
        const mealItems = checkedItems[day]?.[meal] || {};
        const hasSelection = Object.values(mealItems).some(Boolean);
        if (!hasSelection) {
          missing.push(`${day} - ${meal}`);
        }
      });
    });

    if (missing.length > 0) {
      Alert.alert('Error', `Please select at least one item for: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
      return;
    }

    Alert.alert('Success', 'Meal set successfully');
  };

  const isSetMealEnabled = () => {
    if (!fromDate || !toDate || days.length === 0) return false;
    
    return days.every((day) =>
      ['Breakfast', 'Lunch', 'Dinner'].every((meal) => {
        const mealItems = checkedItems[day]?.[meal] || {};
        return Object.values(mealItems).some(Boolean);
      })
    );
  };

  return (
    <ScreenLayout title="Set meal">
      <View className="relative h-full">
        <View className="flex-row items-center justify-end m-5">
          <Text className="text-black text-lg">{currentDate}</Text>
          <Text className="ml-2 text-gray-500 ">({dayName})</Text>
        </View>
        <View className="flex-row justify-around">
          <View className="">
            <Text className="my-3">From Date</Text>
            <Pressable
              className="p-3 rounded-lg bg-gray-200"
              onPress={() => setShowFromPicker(true)}
            >
              <Text className="text-gray-500 ">
                {fromDate.toLocaleDateString('en-GB')}
              </Text>
            </Pressable>
            {showFromPicker && (
              <DateTimePicker
                value={fromDate}
                mode="date"
                display="default"
                onChange={(event, date) => handleDateChange('from', event, date)}
              />
            )}
          </View>
          <View className="">
            <Text className="my-3">To Date</Text>
            <Pressable
              className="p-3 rounded-lg bg-gray-200"
              onPress={() => setShowToPicker(true)}
            >
              <Text className="text-gray-500 ">
                {toDate.toLocaleDateString('en-GB')}
              </Text>
            </Pressable>
            {showToPicker && (
              <DateTimePicker
                value={toDate}
                mode="date"
                display="default"
                onChange={(event, date) => handleDateChange('to', event, date)}
              />
            )}
          </View>
          <Pressable className="items-center justify-end p-2">
            <Image className="w-7 h-8" source={calendar} />
          </Pressable>
        </View>
        {days.length > 0 && (
          <View className="my-5 mx-5">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {days.map((day, index) => (
                <Pressable
                  key={`${day}-${index}`} // Ensure unique keys
                  onPress={() => setSelectedDay(day)}
                  className={`p-2 rounded-lg mx-1 ${
                    selectedDay === day ? 'bg-[#4A5B9B] text-white' : 'bg-gray-200'
                  }`}
                  style={{ minWidth: 120 }} // Ensure consistent width
                >
                  <Text className={`${selectedDay === day ? 'text-white' : 'text-gray-700'} text-center`}>{day}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
        <View className="flex-row justify-around mt-10">
          <Text
            onPress={() => setOptions(0)}
            className={`${options === 0 ? 'text-xl border-b-2 border-primary' : 'text-lg'} text-primary`}
          >
            Breakfast
          </Text>
          <Text
            onPress={() => setOptions(1)}
            className={`${options === 1 ? 'text-xl border-b-2 border-primary' : 'text-lg'} text-primary`}
          >
            Lunch
          </Text>
          <Text
            onPress={() => setOptions(2)}
            className={`${options === 2 ? 'text-xl border-b-2 border-primary' : 'text-lg'} text-primary`}
          >
            Dinner
          </Text>
        </View>
        {selectedDay && ['Breakfast', 'Lunch', 'Dinner'].map((mealType) =>
          options === ['Breakfast', 'Lunch', 'Dinner'].indexOf(mealType) ? (
            <View key={mealType} className="mt-5 h-1/2">
              <ScrollView showsVerticalScrollIndicator={false}>
                  {menu[mealType].map((item) => {
                    const isChecked = checkedItems[selectedDay]?.[mealType]?.[item] || false;
                    return (
                      <View
                        key={`${selectedDay}-${mealType}-${item}`} // Unique key for each item per day
                        
                        className={`flex-row items-center justify-between px-4 py-4 mx-5 rounded-lg mb-2 ${
                          isChecked ? 'bg-gray-100' : 'bg-white'
                        }`}
                      >
                        <Text className="text-gray-800 font-medium text-lg flex-1">{item}</Text>
                        <Pressable onPress={() => toggleCheck(mealType, item)} className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
                          {isChecked && (
                            <View className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
                              <Text className="text-white text-xs font-bold">✓</Text>
                            </View>
                          )}
                        </Pressable>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          ) : null
        )}
        <Pressable
          className={`absolute z-10 bottom-12 right-5 p-3 rounded-lg ${
            isSetMealEnabled() ? 'bg-[#4A5B9B]' : 'bg-gray-200'
          }`}
          onPress={handleSetMeal}
          disabled={!isSetMealEnabled()}
        >
          <Text className="text-white text-center">Set Meal</Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}