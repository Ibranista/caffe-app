import * as React from 'react';
import { View,Text, StyleSheet, SafeAreaView } from 'react-native';

export default function CaffeFooter() {
    return(
        <SafeAreaView style={footerStyle.main}>
        <Text
          style={{
            padding: 10,
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>Caffe Header</Text>
        </SafeAreaView>
    )
}

const footerStyle = StyleSheet.create({
  main:{
    backgroundColor: '#EDEFEE'
  }
})