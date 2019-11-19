import React from 'react';
import { Text, View, Button, Image, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/z.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Image
                style={{width: 200, height: 200}}
                source={require('../assets/z.png')}
            />
           <Button 
                title="Food"
                onPress={() => navigation.navigate('Foods')}
           />
       </View>
    </ImageBackground>
    );
};

export default HomeScreen;