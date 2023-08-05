import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Item({ item, selectProductHandler, changeProductQuantityHandler, updateAsyncStorage }) {
    const [qty, setQty] = useState(0);

    function quantityChangeHandler(quantity) {
        return setQty(quantity)
    }

    function confirmClickHandler() {
        changeProductQuantityHandler(item._id, qty);
        item.selected = true;
        selectProductHandler(item);
        updateAsyncStorage(item);
        // AsyncStorage.getItem('selectedItems')
        //     .then((selectedItems) => {
        //         let items = selectedItems ? JSON.parse(selectedItems) : [];
        //         items = items.filter(x => x._id !== item._id);

        //         if (item.quantity !== 0) items.push(item);
        //         AsyncStorage.setItem('selectedItems', JSON.stringify(items))
        //             .then(res => res)
        //             .catch(err => console.log(`An error occured while trying to SET the selected items! ${err.message}`))
        //     })
        //     .catch(err => console.log(`An error occured while trying to GET the selected items! ${err.message}`))
        return setQty(0);
    }

    function cancelPressHandler() {
        item.quantity = 0;
        item.selected = true;
        updateAsyncStorage(item);
        return selectProductHandler(item);
    }

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
                    <Pressable onPress={cancelPressHandler} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>X</Text>
                    </Pressable>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.typeField}
                        onChangeText={quantityChangeHandler}
                        autoFocus={true}

                    />
                    <Pressable style={styles.buttonContainer} onPress={confirmClickHandler}>
                        <Image source={require('../../../assets/agree.png')} style={styles.agreeImage} />
                    </Pressable>
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
        width: (Math.round(Dimensions.get('window').width * 0.8)) - 60, // - 60 (40 pixels padding from flatlist and 10 pixels margin from each image - total 60 pixels);
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
        width: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    agreeImage: {
        width: 25,
        height: 25,
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