import { View, Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        height: 150,
        overflow: 'hidden',
    },

    logo: {
        objectFit: 'contain',
        width: '100%',
        height: '100%'
    }
});