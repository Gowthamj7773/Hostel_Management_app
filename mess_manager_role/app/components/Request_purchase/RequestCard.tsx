import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const product = require('../../../assets/icons/product.png');
const productQuantity = require('../../../assets/icons/quantity.png')
const RequestCard = () => {
  const currentRequest = {
    id:1,
    timestamp: '07-01-2025 (04:30 PM)',
    location: 'Ganga | 2nd Floor',
    products: [
      { name: 'Closet handle', quantity: '1' },
      { name: 'Door lock', quantity: '3' },
    ],
  };
  const len = Object.keys(currentRequest).length; // for comma logic in prod_quantity
  return (
    <View className="bg-white p-4 my-5 border border-gray-200 rounded-lg">
      {/* Current Request Header */}
      <View className="flex justify-between items-start mb-4">
        <Text className="text-gray-500 font-medium my-2">
          <Text>{currentRequest.id}.</Text>
          {currentRequest.timestamp}
        </Text>
        <Text className="text-gray-700 font-medium">{currentRequest.location}</Text>
      </View>

      {/* Product Details */}
      <View className="bg-gray-50 p-4 rounded-lg mb-4">
        <Text className="text-lg font-semibold mb-2 text-center">Product details</Text>
        <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center'>
              <Image className='w-6 h-6 mr-2' source={product}/>
              <View>
              {
              currentRequest.products.map((product, index) => (
                <View key={index} className="flex-row justify-between items-center py-1">

                  <Text className="text-gray-600">{product.name}</Text>
                </View>
              ))}
              </View>
            </View>

            <View className='flex-row items-center'>
              <Image className='w-6 h-6 mr-2' source={productQuantity}/>
              <Text>Qty: </Text>
                <View className='flex-row'>
                {
                currentRequest.products.map((product, index) => (
                  <Text key={index}>
                  {product.quantity}
                  {index !== currentRequest.products.length - 1 && <Text>, </Text>}
                  </Text>
                ))
                }
                </View>
            </View>
        </View>
      </View>

      {/* Cancel Button */}
      <Pressable className="bg-primary px-10 py-2 rounded-lg self-center mb-4">
        <Text className="text-white text-center font-medium">Cancel</Text>
      </Pressable>

    </View>
  );
};

export default RequestCard;