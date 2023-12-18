import * as React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export default function CaffeHeader() {
    return(
        <View
        style={HeaderStyle.container}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            textAlign: 'center',
          }}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    )
}

const HeaderStyle = StyleSheet.create({
  container:{
    backgroundColor:'#EDEFEE'
  }
})