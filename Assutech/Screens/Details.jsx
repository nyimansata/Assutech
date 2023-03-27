import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { View , Text, StyleSheet, Image} from "react-native";

function Details({navigation}) {
    const route = useRoute();
    const {user} = route.params;
    console.log(user)

    const goToBalance = (user) => {
        navigation.navigate('Balance', {user:user});
    }
    return(
        <View style={styles.container}>
            <Image source={user.image} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.name}>{user?.text}</Text>
            <Text style={styles.productInfor}>{user.produtInfor}</Text>
            <Text>{user.info}</Text>
            <Text>{user.B}</Text> 
         <View style={styles.bidcontent}>
            <Text style={styles.bidNumber}>{user.bidNumber}</Text>
            <TouchableOpacity onPress={() => goToBalance(user)}>
                 <Text style={styles.bid}>{user.bid}</Text>
            </TouchableOpacity>
           </View>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
     image: {
        width: 320,
        height: 220,
        alignSelf: 'center',
        borderRadius: 10
     },
     content:{
        marginHorizontal: 20,
        marginTop: 15
     },
     name: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20
     },
     productInfor: {
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 10
     },
     bidcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
     },
     bid: {
        backgroundColor: '#f1a445',
        padding: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center'
     },
     bidNumber: {
        fontWeight: 'bold',
        fontSize: 17
     }
})
export default Details;