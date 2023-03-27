// screens
import Details from "../Screens/Details";
import MainScreen from "../Screens/MainScreen";
import Account from "../Screens/Account";
import Balance from '../Screens/Balance';
import {FontAwesome5} from '@expo/vector-icons'

// Botton Navigations
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo,AntDesign, Ionicons, FontAwesome,} from '@expo/vector-icons';
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";


function BottomNav({navigation}) {
    // const Balance = 'Balance';
    // const Details = 'Details';
    // const Account = 'Account';

    // Tab Navigations
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
               initialRouteName={MainScreen}
               
               screenOptions={{

                headerTitle: () => 
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                         <AntDesign name="left" size={24}/>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginLeft: '30%',}}>
                       <Text style={{fontWeight: 'bold'}}>Try It Out</Text>
                       <FontAwesome5 name="fire" size={24} color="black" />
                    </View>
                </View>,
                tabBarActiveTintColor: "#f1a445",
               }}       
        >
            <Tab.Screen name="MainScreen" 
                        component={MainScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color, size}) => (
                                 <Ionicons name="ios-home" size={size} color={color} />              
                            )
                        }}
            />
            <Tab.Screen name="Detail" 
                        component={Details}
                        options={{
                            tabBarLabel: 'Details',
                            tabBarIcon: ({color, size}) => {
                                <Ionicons name="add" size={size} color={color}/>
                            }
                        }}
            />
            <Tab.Screen name="Account" 
                        component={Account}
                        options={{
                            tabBarLabel: 'Records',
                            tabBarIcon: ({color, size}) => {
                                <AntDesign name="user" size={size} color={color} />
                                
                                // <Entypo name="users" size={24} color="black" />

                            }
                        }}
            />
            <Tab.Screen name="Balance" 
                        component={Balance}
                        options={{
                            tabBarLabel: 'Balance',
                            tabBarIcon: ({color, size}) => {
                                <FontAwesome name="windows" size={24} color="black" />

                            }
                        }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        // marginLeft: '40%'
    }

})
export default BottomNav;