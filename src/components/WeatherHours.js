import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';
import WeatherAnimations from './WeatherAnimations';

const WeatherHours = ({ data }) => {
  const hourlyData = data.forecast.forecastday[0].hour;

  const HourlyWeather = ({ hourlyData }) => (
    <View style={styles.innerContainer}>
      <View style={styles.hourly}>
        <Text>{dayjs.unix(hourlyData.time_epoch).format('HH:mm')}</Text>
        <Text>{Math.round(hourlyData.temp_c)}°C</Text>
        <WeatherAnimations data={hourlyData} styleIndex={0} />
        <Text>{hourlyData.condition.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={hourlyData}
        keyExtractor={(item) => item.time_epoch}
        renderItem={({ item }) => <HourlyWeather hourlyData={item} />}
      />
    </View>
  );
};

export default WeatherHours;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    margin: 8,
  },
  hourly: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: 0.5,
    padding: 4,
  },
});
