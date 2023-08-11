import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function MainMenu() {
    const navigation = useNavigation();

    function redirectUser(screen) {
        return navigation.navigate(screen)
    }

    return (
        <View style={styles.listContainer}>
            <Pressable style={styles.containerWrapper} onPress={redirectUser.bind(this, 'NewOrder')}>
                <Image source={require('../../../assets/new-order.png')} style={styles.icon} />
                <Text>Нова Поръчка</Text>
            </Pressable>
            <Pressable style={styles.containerWrapper} onPress={redirectUser.bind(this, 'Clients')}>
                <Image source={require('../../../assets/clients.png')} style={styles.icon} />
                <Text>Клиенти</Text>
            </Pressable>
            <Pressable style={styles.containerWrapper}>
                <Image source={require('../../../assets/all-orders.png')} style={styles.icon} />
                <Text>История на поръчки</Text>
            </Pressable>
            <Pressable style={styles.containerWrapper}>
                <Image source={require('../../../assets/stock.png')} style={styles.icon} />
                <Text>Продукти</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
        marginHorizontal: 20
    },

    icon: {
        marginBottom: 10
    },

    containerWrapper: {
        width: (Math.round(Dimensions.get('window').width / 2)) - 30, // - 30 (20 pixels padding from listContainer and 10 pixels gap);
        gap: 10,
        height: "25%",
        backgroundColor: "#E86161",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    }
});