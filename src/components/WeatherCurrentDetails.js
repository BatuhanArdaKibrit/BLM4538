import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const WeatherCurrentDetails = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.parts}>
          <Ionicons name='md-umbrella' size={32} color='black' />
          <Text>{data.forecast.forecastday[0].day.daily_chance_of_rain}%</Text>
        </View>
        <View style={styles.parts}>
          <Feather name='wind' size={32} color='black' />
          <Text>{Math.round(data.current.wind_kph)}km/h</Text>
        </View>
        <View style={styles.parts}>
          <Feather name='sunrise' size={32} color='black' />
          <Text>{data.forecast.forecastday[0].astro.sunrise}</Text>
        </View>
        <View style={styles.parts}>
          <Feather name='sunset' size={32} color='black' />
          <Text>{data.forecast.forecastday[0].astro.sunset}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCurrentDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
  },
  parts: {
    alignItems: 'center',
  },
});
