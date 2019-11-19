import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground} from 'react-native';

const places = [
    {Festival: 'Food1', Location: 'Unknown'},
    {Festival: 'Food2', Location: 'Unknown'},
    {Festival: 'Food3', Location: 'Unknown'},
    {Festival: 'Food4', Location: 'Unknown'}
]

const makanan = () => {
    return (
        <ImageBackground source={require('../assets/z.jpg')} style={{width: '100%', height: '100%'}}>
        <FlatList 
            data={places}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    <Text >
                        {item.food}
                    </Text>
                    <Text>
                        {item.food}
                    </Text>
                </View>
            }
            keyExtractor={item => item.food}
        />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default makanan;