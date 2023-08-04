import { Button, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useState } from "react";
import Item from "./Item/Item";


export default function NewOrderScreen() {
    const [products, setProducts] = useState(productss);

    function selectProductHandler(product) {
        return setProducts((oldProducts) => {
            return oldProducts.map(x => {
                if (x._id === product._id) {
                    x.selected = !x.selected;
                    if(x.selected && x.quantity > 0) x.quantity = 0;
                };
                return x;
            })
        })
    }

    function changeProductQuantityHandler(itemId, newValue) {
        return setProducts((oldProducts) => {
            return oldProducts.map(x => {
                if (x._id === itemId) {
                    x.quantity = Number(newValue);
                }
                return x;
            })
        })
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
                    />
                }}
                keyExtractor={item => item._id}
                keyboardShouldPersistTaps='always'
            />
        </>
    );
}