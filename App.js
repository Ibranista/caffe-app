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
import {getHeaderTitle} from '@react-navigation/elements';
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

function ForTheTester(){
  
  return(
    <View>
      <Text>For The Tester</Text>
    </View>
  ) 
}

function BottomBar({navigation,state}){
  const handleNavigation = (name) => {
    navigation.navigate(name);
  };
  const bottomBarConfig=[
    {
      name:'Home',
      component:HomeScreen,
    },
    {
      name:'Details',
      component:DetailsScreen,
    },
    {
      name:'Test',
      component:TestScreen,
    },
  ]
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      {
        bottomBarConfig.map((item,index)=>{
          return(
            <Button
            key={index}
            title={item.name}
            onPress={()=>handleNavigation(item.name)}
            />
          )
        })
      }
    </View>
  )
}

function MyHeader({ title, leftButton }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        height: 50,
      }}>
      {leftButton}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}

function TestScreen({navigation,route}){

  console.log('routes===>',route)
  return(
    <>
<RootStack.Navigator
tabBar={props=><BottomBar {...props}/>}
initialRouteName={'Home'}
screenOptions={{
  headerShown:true,
  header: ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);
    return (
      <MyHeader
        title=''
        leftButton={<Button onPress={navigation.goBack} 
        title='Back'
        />}
      />
    );
  },
}}
>
  <RootStack.Screen name='Home' component={HomeScreen}/>
  <RootStack.Screen name='Details' component={DetailsScreen}/>
  <RootStack.Screen name='Test' component={ForTheTester}/>
</RootStack.Navigator>
  </>
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
