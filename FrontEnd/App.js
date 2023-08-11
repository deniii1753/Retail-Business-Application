import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SystemUI from 'expo-system-ui';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import NewOrderScreen from './Components/NewOrderScreen/NewOrderScreen';
import ClientsScreen from './Components/ClientsScreen/ClientsScreen';

SystemUI.setBackgroundColorAsync('#202020')
  .catch(err => console.log(`error: ${err.message}`));

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          contentStyle: styles.container
        }}
      >

        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='NewOrder' component={NewOrderScreen} />
        <Stack.Screen name='Clients' component={ClientsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  }
});
