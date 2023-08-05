import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useEffect, useState } from "react";
import Item from "./Item/Item";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function NewOrderScreen() {
    const [products, setProducts] = useState(productss);
    const [chosenProducts, setChosenProducts] = useState([]);

    useEffect(() => {
        AsyncStorage.setItem('selectedItems', '')
            .then(res => res)
            .catch(err => console.log(`An error occured while trying to SET the selected items! ${err.message}`))
    }, [])
    
    function selectProductHandler(item) {

        return setProducts((oldItems) => {
            return oldItems.map(x => {
                if (x._id === item._id) {
                    x.selected = !x.selected;
                };
                return x;
            })
        })
    }

    function changeProductQuantityHandler(productId, newValue) {
        return setProducts((oldItems) => {
            return oldItems.map(x => {
                if (x._id === productId) {
                    x.quantity = Number(newValue);
                }
                return x;
            })
        })
    }

    function updateAsyncStorage(item) {
        AsyncStorage.getItem('selectedItems')
            .then((selectedItems) => {
                let items = selectedItems ? JSON.parse(selectedItems) : [];
                items = items.filter(x => x._id !== item._id);
                if (item.quantity !== 0) items.push(item);
                AsyncStorage.setItem('selectedItems', JSON.stringify(items))
                    .then(() => setChosenProducts(items))
                    .catch(err => console.log(`An error occured while trying to SET the selected items! ${err.message}`))
            })
            .catch(err => console.log(`An error occured while trying to GET the selected items! ${err.message}`))
    }

    return (
        <>
            <HeaderMenu pageName={'Нова Поръчка'} />

            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return <Item
                        item={item}
                        selectProductHandler={selectProductHandler}
                        changeProductQuantityHandler={changeProductQuantityHandler}
                        updateAsyncStorage={updateAsyncStorage}
                    />
                }}
                keyExtractor={item => item._id}
                keyboardShouldPersistTaps='never'
                style={{ marginHorizontal: 20 }}
            />

            {chosenProducts.length
                ?
                <View style={styles.orderCompleteContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.totalText}>Общо: </Text>
                        <Text style={styles.totalPrice}>{(chosenProducts.reduce((acc, x) => {
                            acc += x.price * x.quantity;
                            return acc;
                        }, 0)).toFixed(2)}лв.</Text>
                    </View>
                    <Pressable style={styles.continueButtonContainer}>
                        <Text style={styles.completeButtonText}>Продължи към приключване</Text>
                    </Pressable>
                </View>
                :
                <></>
            }

        </>
    );
}

const styles = StyleSheet.create({
    orderCompleteContainer: {
        backgroundColor: '#1f1f1f',
        width: '100%',
        padding: 10,
        borderRadius: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10
    },
    totalText: {
        fontSize: 18,
        color: 'white'
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    continueButtonContainer: {
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 3,
        backgroundColor: '#2ca4fa'
    },
    completeButtonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0,
        color: 'white'
    }
})