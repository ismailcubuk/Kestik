import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View className='border-2 border-blue-500 flex flex-1 items-center my-20p mx-10p bg-white' >
      <Text className='border-2 text-2xl font-semibold my-5p'>Login</Text>
      <Image className='rounded-full bg-orange-400'
        source={require('../../assets/images/logo.svg')}
        style={{ width: 96, height: 96 }}
      />
      <View className='border-2 border-black my-5p flex flex-row'>
        <Text className='text-2xl font-semibold'>Kestik</Text>
        <Text className='text-2xl font-semibold color-orange-400'>!</Text>
      </View>
      <View className='border-2 border-black'>
        <Text>email</Text>
        <Text>email</Text>
      </View>
    </View>

  );

};


export default HomeScreen;
