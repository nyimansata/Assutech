import { View, Text, StyleSheet, ScrollView, Button, FlatList, TouchableOpacity , Image} from "react-native";
import { Cards } from "../Components/Data";

function MainScreen({navigation}) {

    const goToDetails = (item) => {
        navigation.navigate('Detail', {user:item})
    }
    return(
        <View>
            <View>
                <FlatList
                      data={Cards}
                      numColumns={2}
                      renderItem={({item}) => {
                        // console.log(item)
                        return(
                            <TouchableOpacity style={styles.container} onPress={() => goToDetails(item)}>
                              <View style={styles.texts}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.name}>{item.text}</Text>
                                <Text style={styles.rating}>{item.rating}</Text>
                                <Text style={styles.read}>{item.read}</Text>
                                <Text>{item.produtInfor ? '' : ''}</Text>
                                <Text>{item.info ? '' : ''}</Text>
                                <Text>{item.bidNumber? '' : ''}</Text>
                                <Text>{item.bid ? '' : ''}</Text>
                                <Text>{item.minimumBid ? '' : ''}</Text>
                                <Text>{item.confirm ? '' : ''}</Text>
                             </View>
                            </TouchableOpacity>
                        )
                      } }
                      keyExtractor={(item) => item.id}
                 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginHorizontal: 15,
        backgroundColor: '#599db2',
        height: 215,
        borderRadius: 10
        
        
    },
    image: {
        width: 150,
        height: 130
    },
    texts: {
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white'
    },
    rating: {
        color: 'white',
        fontWeight: '700'
    },
    read: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        fontWeight: '600'

    }



})
export default MainScreen;