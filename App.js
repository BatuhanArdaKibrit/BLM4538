import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const Drawer = createDrawerNavigator();

  const [savedCities, setSavedCities] = useState([]);

  const getCity = async () => {
    try {
      const savedCity = await AsyncStorage.getItem('cities');
      const currentCity = JSON.parse(savedCity);
      setSavedCities(currentCity);
      console.log(savedCities);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCity = async (value) => {
    savedCities.splice(savedCities.indexOf(value), 1);
    const newCitiesArray = savedCities;
    setSavedCities(newCitiesArray);
    storeCity(newCitiesArray);
    getCity();
  };

  const storeCity = async (value) => {
    try {
      await AsyncStorage.setItem('cities', JSON.stringify(value));
      // console.log(cities);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavigationContainer onStateChange={() => getCity()}>
      <Drawer.Navigator
        initialRouteName='My Location'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name='My Location'
          component={HomeScreen}
          options={{
            drawerIcon: ({}) => (
              <Entypo
                name='location'
                size={20}
                color='dimgray'
                style={{ position: 'absolute', right: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name='Search'
          component={SearchScreen}
          options={{
            // drawerItemStyle: {
            //     display: 'none',
            //   },
            drawerIcon: ({}) => (
              <MaterialCommunityIcons
                name='map-search'
                size={20}
                color='dimgray'
                style={{ position: 'absolute', right: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name='Location'
          component={LocationScreen}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
        {savedCities &&
          savedCities.map((cities) => (
            <Drawer.Screen
              key={cities}
              name={cities}
              component={LocationScreen}
              initialParams={{ selectedCity: cities }}
              options={{
                drawerIcon: ({}) => (
                  <Entypo
                    name='circle-with-cross'
                    size={20}
                    color='dimgray'
                    style={{ position: 'absolute', right: 20 }}
                    onPress={() => removeCity(cities)}
                  />
                ),
              }}
            />
          ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
