import { View, Text, ScrollView, Pressable, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MotiView } from 'moti';
import RequestCard from './RequestCard';

const product = require('../../../assets/icons/product.png');
const productQuantity = require('../../../assets/icons/quantity.png');

export default function RequestPurchase() {
    const [addRequest, setAddRequest] = useState(false);
    const [productList, setProductList] = useState([]);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [hasMoved, setHasMoved] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(productList.length / itemsPerPage);

    const handleAddProduct = () => {
        if (!productName || !quantity) {
        Alert.alert('Error', 'Please enter both product name and quantity.');
        return;
        }
        setProductList([...productList, { name: productName, quantity }]);
        setProductName('');
        setQuantity('');
        if (!hasMoved) setHasMoved(true);
    };

    const renderProductItem = (item, index) => (
        <View
        key={index}
        className="bg-gray-200 p-3 rounded-lg my-2 mx-5 flex-row justify-between items-center"
        >
        <View className="flex-row items-center">
            <Image className='w-6 h-6' source={product}/>
            <Text className="ml-2 text-lg">{item.name}</Text>
        </View>
        <View className="flex-row items-center">
            <Image className='w-6 h-6' source={productQuantity}/>
            <Text className="ml-2 text-lg">{item.quantity}</Text>
        </View>
        </View>
    );

    const renderInputFields = () => (
        <View className="mx-5">
        <TextInput
            placeholder="Enter product name"
            className="bg-gray-200 p-3 rounded-lg my-2"
            value={productName}
            onChangeText={setProductName}
        />
        <Text className="mt-4 text-lg text-gray-500">Product Quantity</Text>
        <TextInput
            placeholder="Enter Quantity"
            className="bg-gray-200 p-3 rounded-lg my-2 w-32"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
        />
        </View>
    );

    const renderPaginationDots = () => (
        <View className="flex-row justify-center items-center my-2">
        <Pressable
            onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="mx-2"
        >
            <AntDesign
            name="left"
            size={20}
            color={currentPage === 0 ? '#4A5B9B' : 'gray'}
            />
        </Pressable>
        {Array.from({ length: totalPages }).map((_, index) => (
            <Pressable
            key={index}
            onPress={() => setCurrentPage(index)}
            className={`h-2 w-2 rounded-full mx-1 ${currentPage === index ? 'bg-primary' : 'bg-gray-300'}`}
            />
        ))}
        <Pressable
            onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="mx-2"
        >
            <AntDesign
            name="right"
            size={20}
            color={currentPage === totalPages - 1 ? '#4A5B9B' : 'gray'}
            />
        </Pressable>
        <Text className="ml-2 text-gray-500">{`${currentPage + 1}/${totalPages || 1}`}</Text>
        </View>
    );

    return (
        <ScreenLayout title="Request purchase">
        {addRequest ? (
            <View className="h-full relative">
            <Text className="text-center my-5 text-xl font-medium">Product details</Text>
            <View className="mx-5 flex-row items-center">
                <Text className="text-lg text-gray-500">Product Name</Text>
                <MotiView
                from={{ translateX: 0, opacity: 0 }}
                animate={{ translateX: hasMoved ? 230 : 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 800 }}
                >
                <Pressable onPress={handleAddProduct} className="ml-2">
                    <Text className="text-3xl text-gray-500">+</Text>
                </Pressable>
                </MotiView>
            </View>
            <ScrollView className="flex-1">
                {productList
                .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                .map(renderProductItem)}
                {renderInputFields()}
            </ScrollView>
            {totalPages > 0 && renderPaginationDots()}
            <View className="flex-row items-center justify-end px-5 pb-24">
                <Pressable
                className="mr-8"
                onPress={() => {
                    setAddRequest(false);
                    setHasMoved(false);
                }}
                >
                <Text className="text-primary text-lg">Cancel</Text>
                </Pressable>
                <Pressable className="bg-primary px-4 py-2 rounded-lg">
                <Text className="text-lg text-white">Submit</Text>
                </Pressable>
            </View>
            </View>
        ) : 
        // (
        //     <View className="h-full relative items-center justify-center">
        //     <Text className="text-xl text-gray-500">No requests have been made</Text>
        //     <Pressable
        //         onPress={() => setAddRequest(true)}
        //         className="absolute bottom-14 right-5 rounded-2xl bg-primary p-5"
        //     >
        //         <AntDesign name="plus" size={24} color="white" />
        //     </Pressable>
        //     </View>
        // )
        (
            <View className='h-full mx-5 relative'>
                <RequestCard/>
            <Pressable
                onPress={() => setAddRequest(true)}
                className="absolute bottom-14 right-0 rounded-2xl bg-primary p-5"
            >
                <AntDesign name="plus" size={24} color="white" />
            </Pressable>
            </View>
        )
        }
        </ScreenLayout>
    );
}