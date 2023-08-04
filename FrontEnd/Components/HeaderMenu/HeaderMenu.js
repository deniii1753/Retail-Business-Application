import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HeaderMenu({pageName}) {
    const navigation = useNavigation();

    function redirectToAnotherPage(page) {
        if (page === 'Home') return navigation.navigate(page)
        return navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={redirectToAnotherPage.bind(null, 'null')}>
                <Image source={require('../../assets/back-arrow.png')} style={styles.icons}></Image>
            </Pressable>
            <Text style={styles.pageName}>{pageName}</Text>
            <Pressable onPress={redirectToAnotherPage.bind(null, 'Home')}>
                <Image source={require('../../assets/home.png')} style={styles.icons}></Image>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BFB9B9',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    icons: {
        width: 25,
        height: 25
    },

    pageName: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});