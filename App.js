import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import CaffeHeader from './src/components/CaffeHeader';
import CaffeFooter from './src/components/CaffeFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import { Menu } from './src/components/MenuItems';

// const height = Dimensions.get('screen').height;//#endregi
export default function App() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
