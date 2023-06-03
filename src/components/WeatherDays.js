import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';
import WeatherAnimations from './WeatherAnimations';

const WeatherDays = ({ data }) => {
  let firstDay = dayjs
    .unix(data.forecast.forecastday[1].date_epoch)
    .format('dddd');
  let secondDay = dayjs
    .unix(data.forecast.forecastday[2].date_epoch)
    .format('dddd');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>{firstDay}</Text>
        <View style={styles.daysAnimation}>
          <WeatherAnimations
            data={data.forecast.forecastday[1].day}
            styleIndex={1}
          />
        </View>
        <Text>
          {Math.round(data.forecast.forecastday[1].day.maxtemp_c)}°C /{' '}
          {Math.round(data.forecast.forecastday[1].day.mintemp_c)}°C
        </Text>
        <Text>{data.forecast.forecastday[1].day.condition.text}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>{secondDay}</Text>
        <View style={styles.daysAnimation}>
          <WeatherAnimations
            data={data.forecast.forecastday[2].day}
            styleIndex={1}
          />
        </View>
        <Text>
          {Math.round(data.forecast.forecastday[2].day.maxtemp_c)}°C /{' '}
          {Math.round(data.forecast.forecastday[2].day.mintemp_c)}°C
        </Text>
        <Text>{data.forecast.forecastday[2].day.condition.text}</Text>
      </View>
    </View>
  );
};

export default WeatherDays;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 15,
    height: 190,
    width: 140,
    paddingVertical: 4,
  },
  daysAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },
});
