import { useEffect, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";


export default function ClientsScreen() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        setClients(clientss);
    }, [])
    return (
        <>
            <HeaderMenu pageName={'Клиенти'} />

            {/* TO DO */}
            
            {/* Search bar */}
            {/* More information about store when store is clicked */}

            <FlatList
                data={clients}
                renderItem={({ item: client }) => {
                    return (
                        <View style={styles.container}>
                            <Image source={require('../../assets/store.png')} style={styles.image} />

                            <View style={styles.clientInfo}>
                                <View>
                                    <Text style={styles.storeName}>{client.storeName}</Text>
                                    <Text style={styles.descriptionText}>{client.invoiceInformation.companyName}</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.descriptionText}>{client.storeAddress}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={client => client._id}
                keyboardShouldPersistTaps='never'
                style={{ marginHorizontal: 20 }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20
    },
    image: {
        width: '10%',
        height: 50,
        objectFit: 'contain',
        marginRight: 15,
    },

    clientInfo: {
        width: (Math.round(Dimensions.get('window').width * 0.9)) - 55, // - 50 (40 pixels padding from flatlist and 15 pixels margin rgiht from the image - total 55 pixels);
        gap: 10,
        justifyContent: 'flex-start',
    },

    storeName: {
        color: '#fff',
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: 'bold',
    },

    description: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    descriptionText: {
        color: '#A5A4A4',
    }
})