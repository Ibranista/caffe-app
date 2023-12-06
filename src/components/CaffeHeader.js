import * as React from 'react';
import { View,Text } from 'react-native';

export default function CaffeFooter() {
    return(
        <View style={{ backgroundColor: '#F4CE14' }}>
        <Text
          style={{
            padding: 40,
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}>Caffe Header</Text>
        </View>
    )
}

