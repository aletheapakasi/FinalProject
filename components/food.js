import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';

const makanan = ({ navigation }) => {
    return (
     <ImageBackground source={require('../assets/image3.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Button 
                title="Makanan"
                onPress={() => navigation.navigate('makanan1')}
           />
           <Button 
                title="Minuman"
                onPress={() => navigation.navigate('makanan2')}
           />
           <Button 
                title="Kue"
                onPress={() => navigation.navigate('makanan3')}
            />
       </View>
       </ImageBackground>
    );
};

export default makanan;