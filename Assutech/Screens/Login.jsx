import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import {AntDesign, Entypo, Ionicons, FontAwesome,} from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Login({navigation}) {
    // navigation
    // const navigation = useNavigation();

    // states
    const [hidePassword, setHidePassword] = useState(true);
    // password
    const ShowPassword = () => {
        setHidePassword(!hidePassword);
    }

    // login
    const HandleLogin = () => {
        navigation.navigate('BottomNav');
    }

    return(
        <ScrollView style={{marginTop: '10%'}}>
            <Text style={styles.text}>Login</Text>
            <View>
                <Image source={require('../assets/oo.png')} style={styles.image}/>
            </View>
            <View style={styles.InputContainer}>
                {/* email */}
                <View style={styles.login}>
                    <AntDesign name="user" size={25} color='#599db2'/>
                    <TextInput 
                           placeholder="Your Email"
                           style={styles.input}
                           />
                </View>
                {/* password */}
                <View style={styles.password}>
                     <Entypo name="lock" size={25} color='#599db2' />
                    <TextInput 
                            placeholder="Password" 
                            style={styles.input}
                            />
                    <TouchableOpacity style={styles.icon} onPress={ShowPassword}>
                        {
                             hidePassword ? <AntDesign name="eye" size={24} color='#599db2'/> 
                            : <Ionicons name="ios-eye-off-outline" size={24} color="#599db2" />                    
                        }
                    </TouchableOpacity>

                </View>
                {/* Button */}
                <View>
                    <TouchableOpacity onPress={HandleLogin}>
                        <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                </View>
                {/* text */}
                <View>
                    <Text>Don't have an Account? Sign Up</Text>
                    <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>OR</Text>
                </View>

                {/* other means to login */}
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <FontAwesome name="facebook" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="googleplus" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="twitter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles =  StyleSheet.create({
    image:{
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    text:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    InputContainer: {
        marginHorizontal: '10%'
    },
    login: {
        flexDirection: 'row',
        borderWidth: 0.5,
        padding: 15,
        marginBottom: '10%',
        borderRadius: 10
    },
    password: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 0.5,
        marginBottom: '15%',
        borderRadius: 10

    },
    loginButton: {
        backgroundColor: '#f1a445',
        padding: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
        marginBottom: '10%'
    },
    input: {
        marginLeft: 10
    },
    icon:{
        marginLeft: '45%'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%'
        
    }

})
export default Login;