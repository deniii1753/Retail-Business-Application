import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Item({ item, selectProductHandler, changeProductQuantityHandler }) {
    return (
        <>
            <Pressable onPress={selectProductHandler.bind(null, item)}>
                <View style={[styles.container, item.selected && styles.selectedProduct, item.quantity > 0 && styles.selectedProduct]}>
                    <Image source={{ uri: item.imageURL }} style={styles.image} />
                    <View style={styles.productInfo}>
                        <Text style={[styles.productTitle, styles.productText]}>{item.productName}</Text>
                        <View style={styles.description}>
                            <Text style={styles.productDescriptionText}>Цена: {(item.price).toFixed(2)}лв.</Text>
                            <Text style={styles.productDescriptionText}>Количество: {item.quantity}</Text>
                            
                        </View>
                    </View>
                    <Image source={require('../../../assets/add-item.png')} style={styles.addItemImage} />
                </View>
            </Pressable>

            {item.selected &&
                <View style={styles.additionalMenu}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                    <TextInput
                        defaultValue={item.quantity.toString()}
                        value={item.quantity.toString()}
                        keyboardType="numeric"
                        style={styles.typeField}
                        onChangeText={changeProductQuantityHandler.bind(null, item._id)}
                        autoFocus={true}

                    />
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </View>
            }
        </>
    );
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
        marginRight: 10
    },
    productInfo: {
        width: (Math.round(Dimensions.get('window').width * 0.8)) - 60, // - 60 (40 pixels app padding and 10 pixels margin from each image - total 60 pixels);
        gap: 10,
        justifyContent: 'flex-start',
    },
    productTitle: {
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    productText: {
        color: '#fff'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productDescriptionText: {
        color: '#A5A4A4'
    },
    addItemImage: {
        width: '10%',
        height: 30,
        marginLeft: 10
    },
    selectedProduct: {
        backgroundColor: 'green'
    },
    additionalMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        padding: 10,
        borderColor: 'orange',
        borderRadius: 10,
        borderWidth: 2,
        width: '15%'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    typeField: {
        width: '50%',
        fontSize: 22,
        marginHorizontal: 10,
        borderColor: 'orange',
        borderRadius: 10,
        borderWidth: 2,
        color: '#fff',
        textAlign: 'center'
    }
})