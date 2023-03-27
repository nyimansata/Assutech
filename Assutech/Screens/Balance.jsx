import { useRoute } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

function Balance() {
    const [addedBalance, setAddedBalance] = useState('');
    const [amount, setAmount] = useState(2000)
    const route = useRoute();
    const {user} = route.params;
    // console.log(user)
    const HandleInput = (addedBalance) => {
        setAddedBalance(addedBalance)
        console.log(addedBalance)
    }

    const Evalute = () => {
        if(addedBalance + amount > addedBalance){
               setAmount(addedBalance  + 'winner')
        }     
        console.log(setAmount)

    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{user.text}</Text>
            <TextInput style={styles.input} 
                          placeholder="Place your bid" 
                          keyboardType="numeric"
                          onChangeText={HandleInput}
                        //   value={addedBalance}
                          
            />
            <Text style={styles.bidMinimum}>{amount}</Text>
            <TouchableOpacity onPress={Evalute}>
                <Text style={styles.confirm}>{user.confirm}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        borderWidth: 0.5,
        padding:10,
        width: 200,
        marginBottom: 10, 
        borderRadius: 5
    },
    confirm: {
        backgroundColor: '#f1a445',
        padding: 20,
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '10%',
        borderRadius: 10
    },
    bidMinimum: {
        fontWeight: 'bold',
        marginTop: 20
    }

})
export default Balance;