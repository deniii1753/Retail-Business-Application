import { Image, Dimensions, StyleSheet, Text, View, Pressable } from 'react-native';
import Logo from './Components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />

      {/* <Menu /> */}

      <View style={styles.listContainer}>
        <Pressable style={styles.containerWrapper}>
          <Image source={require('./assets/new-order.png')} style={styles.icon}/>
          <Text>Нова Поръчка</Text>
        </Pressable>
        <Pressable style={styles.containerWrapper}>
          <Image source={require('./assets/clients.png')} style={styles.icon}/>
          <Text>Клиенти</Text>
        </Pressable>
        <Pressable style={styles.containerWrapper}>
          <Image source={require('./assets/all-orders.png')} style={styles.icon}/>
          <Text>История на поръчки</Text>
        </Pressable>
        <Pressable style={styles.containerWrapper}>
          <Image source={require('./assets/stock.png')} style={styles.icon}/>
          <Text>Продукти</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5
  },

  listContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    gap: 10
  },

  icon: {
    marginBottom: 10
  },

  containerWrapper: {
    width: (Math.round(Dimensions.get('window').width / 2)) - 30,
    height: "25%",
    backgroundColor: "#E86161",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  }
});
