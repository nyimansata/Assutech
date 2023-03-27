import { TouchableOpacity } from "react-native";
import { View , Text, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({navigation}) {
    // navigation
    // const navigation = useNavigation();

    // login
    const HandleLogin = () => {
        navigation.navigate('Login');
    }

    // signUp
    const HandleSignUp = () => {
        navigation.navigate('SignUp')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Let's Try The Game</Text>
            <View>
                <Image source={require('../assets/m1.png')}style={styles.image}/>
            </View>
            {/* Login */}
        <View style={styles.authenticate}>
            <View>
                <TouchableOpacity onPress={HandleLogin}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            </View>
            {/* SignUp */}
            <View>
                <TouchableOpacity onPress={HandleSignUp}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:'12%' ,

    },
    text: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
    },
    image:{
        width: 350,
        height: 350
    },
    authenticate:{
        alignSelf: 'center',
        marginTop: '12%'

    },
    login: {
        backgroundColor: '#f1a445',
        padding: 15,
        color: 'white',
        fontWeight: 'bold',   
        marginBottom: '15%',
        textAlign: 'center',
        width: 300,
        borderRadius: 10
    },
    signUp: {
        backgroundColor: '#599db2',
        padding: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 300,
        borderRadius: 10

    }

})
export default HomeScreen;