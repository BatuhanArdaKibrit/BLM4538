import { StyleSheet, Text, View } from 'react-native';
import WeatherAnimations from './WeatherAnimations';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WeatherCurrent = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name='md-menu'
          size={32}
          color='black'
          style={{ top: 2 }}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={styles.cityName}>{data.location.name}</Text>
        <Ionicons
          name='search'
          size={30}
          color='black'
          style={{ top: 1 }}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
      </View>
      <View style={styles.containerInside}>
        <View style={styles.currentAnimation}>
          <WeatherAnimations data={data.current} />
        </View>
        <View style={styles.currentInfo}>
          <View style={styles.currentTempContainer}>
            <Text style={styles.currentWeather}>
              {Math.round(data.current.temp_c)}°C
            </Text>

            <View style={styles.currentWeatherMinMaxContainer}>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°C
              </Text>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°C
              </Text>
            </View>
          </View>

          <View style={styles.currentDesc}>
            <Text>{data.current.condition.text}</Text>
            <Text>Feels Like {Math.round(data.current.feelslike_c)}°C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherCurrent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  cityName: {
    color: 'maroon',
    fontSize: 36,
    textAlign: 'center',
  },
  containerInside: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  currentInfo: {
    justifyContent: 'center',
  },
  currentTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  currentWeather: {
    fontSize: 46,
  },
  currentWeatherMinMaxContainer: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  currentWeatherMinMax: {
    fontSize: 14,
  },
  currentDesc: {
    alignItems: 'center',
  },
  currentAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },

  lottie: {
    height: 200,
    width: 200,
  },
});
