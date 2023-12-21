import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Button } from 'react-native';
import CaffeHeader from './src/components/CaffeHeader';
import CaffeFooter from './src/components/CaffeFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import { Menu } from './src/components/MenuItems';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// charger's

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


// const height = Dimensions.get('screen').height;//#endregi
function HomeScreen() {

  return (
    <SafeAreaView style={
      styles.container
    }>
     <View
        style={{
          backgroundColor: '#495E57',
          flex: 1,
        }}>
        <CaffeHeader />
        {/* <WelcomeScreen /> */}
        <Menu />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <CaffeFooter />
      </View>
      {/* <StatusBar animated />  */}
    </SafeAreaView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
      title='Go to Details ...again'
      color={'skyblue'}
      onPress={()=>navigation.push('Details')}
      />
        <Button title="Go back" onPress={() => navigation.goBack()} />

     <Button
      title='Go Back to The first Screren'
      onPress={()=>navigation.popToTop()}
     />
    </View>
  );
}

function TestScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text
      >Test Screen</Text>
     <Button
     color={'orange'}
     title='Go to Details'
      onPress={()=>navigation.navigate('Details')}
      backgroundColor='orange'  
     />
    </View>
  )
}

const Stack = createNativeStackNavigator();
const RootStack = createBottomTabNavigator();

export default function App(){
return(
  <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Test'
    screenOptions={{
      title: 'Caffe App',
      // headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
      options={
        {
          headerShown: false
        }
      }
      />
      <Stack.Screen name="Details" component={DetailsScreen} 
      options={{
        title: 'Details Screen',
      }}
      />
      <Stack.Screen name="Test">
        {props => <TestScreen {...props} 
          
        />}
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
