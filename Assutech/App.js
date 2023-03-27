import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import MainScreen from './Screens/MainScreen';
import BottomNav from './Components/BottomNav';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// navigate
const Stack = createNativeStackNavigator();

// BottomNav
// export function BottomNavBar()  {
//   return(
//     <View>
//         <BottomNav/>
//     </View>
   
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        <Stack.Screen name='BottomNav' component={BottomNav}/>
      </Stack.Navigator>
    </NavigationContainer>
    //   {/* <StatusBar style="auto" /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
