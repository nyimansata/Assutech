import { useRoute } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


function Account() {
    <></>
    // const route = useRoute();
    // const {user} = route.params;
    // console.log(user)
    // return(
    //     <View style={styles.container}>
    //         <Text style={styles.text}>{user.text}</Text>
    //         <TextInput style={styles.input} placeholder="Place your bid" />
    //         <Text>{user.minimumBid}</Text>
    //         <TouchableOpacity>
    //             <Text style={styles.confirm}>{user.confirm}</Text>
    //         </TouchableOpacity>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        padding:10,
        width: 200,
        marginBottom: 10
    },
    confirm: {
        backgroundColor: '#f1a445',
        padding: 20,
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '20%'
    }

})
export default Account;