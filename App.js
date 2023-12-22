import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Button } from 'react-native';
import CaffeHeader from './src/components/CaffeHeader';
import CaffeFooter from './src/components/CaffeFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import { Menu } from './src/components/MenuItems';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// charger's

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
// const height = Dimensions.get('screen').height;//#endregi


const Stack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
    >
      <BottomStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
      // tabBar={
      //   // generate tabs
      //   ({ state, navigation, descriptors }) => (
      //     <View style={{ flexDirection: 'row', height: 50 }}>
      //       {/* buttons to home and menu */}
      //       <Button
      //         title="Home"
      //         onPress={() => navigation.navigate('Home')}
      //       />
      //       <Button
      //         title="Menu"
      //         onPress={() => navigation.navigate('Menu')}
      //       />
      //     </View>
      //   )
      // }
      >
        <BottomStack.Screen name="Home" component={HomeScreen} />
        <BottomStack.Screen name="Menu">
          {props => <MenuScreen {...props} extraData={Menu} />}
        </BottomStack.Screen>
      </BottomStack.Navigator>
    </NavigationContainer>
  )
}


function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  )
}

function MenuScreen(props) {
  console.log('props===>', props)
  return (
    <View style={styles.container}>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
