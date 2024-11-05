import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon, MD3Colors } from 'react-native-paper';

const HomeScreen = () => {

  const [text, setText] = React.useState("");

  return (
    <View className='border-2 border-blue-500 flex items-center my-20p bg-white' >
      <Image className='rounded-full bg-orange-400'
        source={require('../../assets/images/logo.svg')}
        style={{ width: 96, height: 96 }}
      />
      <View className='my-5p flex flex-row'>
        <Text className='text-2xl font-semibold'>Kestik</Text>
        <Text className='text-2xl font-semibold color-orange-400'>!</Text>
      </View>
      <View className='border-2 flex w-full px-5p'>
        <View>
          <Text className='border-2 text-2xl font-semibold my-5p'>Kaydol veya giriş yap</Text>
          <Text className='border-2'>Devam etmek için tercih ettiğiniz yöntemi seçin</Text>
        </View>
        <View>
          <Button icon="google" mode="contained" onPress={() => console.log('Pressed')}>
            Google ile devam et
          </Button>
          <Button icon="facebook" mode="contained" onPress={() => console.log('Pressed')}>
            Facebook ile devam et
          </Button>
          <Button icon="mail" mode="contained" onPress={() => console.log('Pressed')}>
            E-posta ile devam et
          </Button>
        </View>
      </View>
    </View>

  );

};


export default HomeScreen;
