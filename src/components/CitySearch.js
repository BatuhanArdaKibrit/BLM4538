import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { EvilIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = '6a03dc197c974bac939112527221204';

const CitySearch = () => {
  const navigation = useNavigation();
  const [cityName, setCityName] = useState('');
  const [cityData, setCityData] = useState('');
  const [cities, setCities] = useState([]);

  const fetchCityData = async (cityName) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityName}`
    );
    const data = await response.json();
    // console.log(cityData);
    if (!response.ok) {
      setCityData([]);
    } else {
      setCityData(data);
    }
  };

  useEffect(() => {
    fetchCityData();
    getCity();
  }, []);

  const getCity = async () => {
    try {
      const savedCity = await AsyncStorage.getItem('cities');
      const currentCity = JSON.parse(savedCity);
      setCities(currentCity);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCity = (city) => {
    getCity();

    if (cities === null) {
      const cityNew = [city.name];
      setCities(cityNew);
      storeCity(cityNew);
    } else if (!cities.includes(city.name)) {
      const cityNew = [...cities, city.name];
      setCities(cityNew);
      storeCity(cityNew);
    }
  };

  const storeCity = async (value) => {
    try {
      await AsyncStorage.setItem('cities', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const SearchedCity = ({ data }) => (
    <TouchableOpacity
      style={styles.list}
      onPress={() => {
        navigation.navigate('Location', { selectedCity: data.name });
      }}
    >
      <View style={styles.listLine}>
        <Text style={styles.listText}>{data.name}</Text>
        <MaterialIcons
          name='add-location-alt'
          size={24}
          color='black'
          onPress={() => handleCity(data)}
        />
      </View>
      <View style={styles.listSeparator}></View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <Ionicons
          name='arrow-back-sharp'
          size={26}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
        <Ionicons
          name='ellipsis-vertical-outline'
          size={26}
          color='black'
          style={{ right: 4 }}
        />
        <TextInput
          style={styles.searchText}
          placeholder='Search City'
          value={cityName}
          onChangeText={(text) => {
            setCityName(text);
            fetchCityData(text);
          }}
        />
        <EvilIcons name='search' size={28} color='black' />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={cityData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchedCity data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  searchText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  listContainer: {
    margin: 24,
  },
  list: {
    paddingBottom: 10,
    marginBottom: 4,
  },
  listLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
  },
  listText: {
    fontSize: 18,
    paddingLeft: 10,
  },
  listSeparator: {
    backgroundColor: 'gray',
    height: 0.5,
    margin: 2,
  },
});
