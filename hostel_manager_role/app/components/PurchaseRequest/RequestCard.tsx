// RequestCard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, Pressable } from 'react-native';


// icons 
const productIcon = require('../../../assets/icons/product.png')
const quantityIcon = require('../../../assets/icons/quantity.png')
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RequestCard({ request, index, onReject, onApprove}) {
  // Variables declared at top for code readability
  const [showProductModal, setShowProductModal] = useState(false);
  const totalQuantity = request.products.reduce((sum, product) => sum + product.quantity, 0);
  const hasMultipleProducts = request.products.length > 1;
  const firstProduct = request.products[0];

  // Get requester location details
  const getRequesterLocation = () => {
    if (request.requester.role.includes('mess_manager')) {
      return 'Mess';
    }
    return `${request.requester.hostel.charAt(0).toUpperCase() + request.requester.hostel.slice(1)} | ${request.requester.floor}${getFloorSuffix(request.requester.floor)} Floor`;
  };

  const getFloorSuffix = (floor) => {
    if (floor === 'ground') return '';
    if (floor === '1') return 'st';
    if (floor === '2') return 'nd'; 
    if (floor === '3') return 'rd';
    return 'th';
  };

  return (
    <>
      <View className="bg-white rounded-lg shadow-sm border border-gray-100">
        {/* Header with index and profile */}
        <View className="flex-row items-start m-[10px] justify-between mb-3">
          <View className="flex-row items-center flex-1">
            <Text className="text-lg font-semibold text-gray-800 mr-2">
              {index}.
            </Text>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {request.requester.name}
              </Text>
              <Text className="font-medium text-lettergreen">
                {getRequesterLocation()}
              </Text>
            </View>
          </View>
          
          <Image
            source={{ uri: request.requester.profilePic }}
            className="w-[60px] h-[60px] rounded-xl"
          />
        </View>

        {/* Product details section */}
        <View className="mb-4 bg-bggray rounded-sm m-2 p-2 px-4">
              <Text className="text-center text-gray-600 font-medium mb-3">
                Product details
              </Text>
              
              <View className="flex-row items-center mb-2">
                <Image className='h-6 w-6 mr-2' source={productIcon}/>
                <Text className="flex-1 font-medium">
                  {hasMultipleProducts 
                    ? `${firstProduct.name} ${request.products.length - 1}+ more..`
                    : firstProduct.name
                  }
                </Text>
              </View>

          <View className="flex-row items-center mt-2">
                <Image className='h-6 w-6 mr-2' source={quantityIcon}/>
            <Text className="flex-1 font-medium">
              Total Qty : {totalQuantity}
            </Text>
                {hasMultipleProducts && (
                  <Pressable className='mr-5 mb-2' onPress={() => setShowProductModal(true)}>
                    <Text className="text-primary font-medium ">View all</Text>
                  </Pressable>
                )}
          </View>
        </View>

        {/* Action buttons */}
        <View className="flex-row items-center justify-end m-3">
          <Pressable
            onPress={onReject}
            className="mr-3 "
          >
            <Text className="text-center  text-red-500 font-medium">
              Reject
            </Text>
          </Pressable>
          
          <TouchableOpacity
            onPress={onApprove}
            className="py-[10px] px-[10px] rounded-lg bg-primary"
          >
            <Text className="text-center text-white font-medium">
              Request purchase
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Details Modal */}
 {/* Product Details Modal */}
      <Modal
        visible={showProductModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProductModal(false)}
      >
        <View className="flex-1 bg-black/35 bg-opacity-50 justify-center items-center px-4">
          <View className="bg-white rounded-2xl w-full max-w-sm h-[579px]">
            {/* Modal Header */}
            <View className='relative z-0'>
              <Text className='text-center my-3 font-medium text-lg'>Prouduct Details</Text>
              <Pressable onPress={()=>setShowProductModal(false)} className='absolute z-10 right-3 top-3 bg-gray-300 rounded-full p-1'>
                <AntDesign name="close" size={20} color="black" />
              </Pressable>
            </View>

            {/* Requester Info */}
            <View className="p-4">
              <View className="flex-row items-center border-b pb-3 border-gray-300">
                <View className="flex-1">
                    <Text className="text-base font-semibold text-gray-800">
                      {request.requester.name}
                    </Text>
                    <Text className="font-medium text-lettergreen">
                      {getRequesterLocation()}
                    </Text>
                  </View>
                  <Image
                    source={{ uri: request.requester.profilePic }}
                    className="w-[60px] h-[60px] rounded-xl mr-3"
                  />
              </View>
            </View>
            
            {/* Product List */}
            <ScrollView showsVerticalScrollIndicator={false} className="px-4 py-2">
              {request.products.map((product, idx) => (
                <View key={idx} className="flex-row items-center py-3 mx-2">
                    <Image className='w-6 h-6 mr-2' source={productIcon}/>
                    <View className="flex-1">
                      <Text className="text-gray-800 font-medium">
                        {product.name}
                      </Text>
                    </View>

                    <View className="flex-row items-center">
                      <Image className='w-6 h-6 mr-2' source={quantityIcon}/>
                      <Text className="text-gray-600 font-medium">
                        Total Qty : {product.quantity.toString().padStart(2, '0')}
                      </Text>
                    </View>
                </View>
              ))}
            </ScrollView>

            {/* Footer */}
            <View className="p-4 border-t border-gray-100">
              <Text className="text-gray-600 font-medium mb-4">
                Total product : {request.products.length}
              </Text>
              
              <View className="flex-row space-x-3">
                <Pressable
                  onPress={onReject}
                  className="flex-1 py-3 rounded-lg border border-red-300 mr-2"
                >
                  <Text className="text-center text-red-500 font-medium">
                    Reject
                  </Text>
                </Pressable>
                
                <TouchableOpacity
                  onPress={onApprove}
                  className="flex-1 py-3 rounded-lg bg-primary ml-2"
                >
                  <Text className="text-center text-white font-medium">
                    Request purchase
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}