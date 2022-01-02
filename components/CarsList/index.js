import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import cars from './cars';
import CarItem from "../CarItem";


const CarsList = (props) => {
    return (
        <View>
            <FlatList
                data = {cars}
                renderItem={({item}) => <CarItem car={item}/> }
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
};

export default CarsList;
