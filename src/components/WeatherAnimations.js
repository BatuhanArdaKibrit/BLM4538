import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const WeatherAnimations = ({ data, styleIndex }) => {
  let stylesCondition =
    styleIndex === 1
      ? styles.lottieOne
      : styleIndex === 0
      ? styles.lottieZero
      : styles.lottie;

  return (
    <View style={styles.currentAnimation}>
      {data.is_day === 0 ? (
        // Night Animations
        data.condition.code === 1000 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-night.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1003 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-cloudynight.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1006 || data.condition.code === 1009 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-windy.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1030 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-mist.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1063 ||
          data.condition.code === 1069 ||
          data.condition.code === 1072 ||
          data.condition.code === 1150 ||
          data.condition.code === 1153 ||
          data.condition.code === 1168 ||
          data.condition.code === 1171 ||
          data.condition.code === 1180 ||
          data.condition.code === 1183 ||
          data.condition.code === 1186 ||
          data.condition.code === 1189 ||
          data.condition.code === 1192 ||
          data.condition.code === 1240 ||
          data.condition.code === 1243 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-rainynight.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1066 ||
          data.condition.code === 1210 ||
          data.condition.code === 1216 ||
          data.condition.code === 1222 ||
          data.condition.code === 1249 ||
          data.condition.code === 1252 ||
          data.condition.code === 1255 ||
          data.condition.code === 1258 ||
          data.condition.code === 1261 ||
          data.condition.code === 1264 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-snownight.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1087 || data.condition.code === 1282 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-thunder.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1114 ||
          data.condition.code === 1117 ||
          data.condition.code === 1204 ||
          data.condition.code === 1207 ||
          data.condition.code === 1213 ||
          data.condition.code === 1219 ||
          data.condition.code === 1225 ||
          data.condition.code === 1237 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-snow.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1135 || data.condition.code === 1147 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-mist.json')}
            style={stylesCondition}
          />
        ) : data.condition.code === 1195 ||
          data.condition.code === 1198 ||
          data.condition.code === 1201 ||
          data.condition.code === 1246 ||
          data.condition.code === 1276 ||
          data.condition.code === 1273 ||
          data.condition.code === 1279 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-storm.json')}
            style={stylesCondition}
          />
        ) : (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-windy.json')}
            style={stylesCondition}
          />
        )
      ) : // Day Animations
      data.condition.code === 1000 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/50649-sunny.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1003 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-partly-cloudy.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1006 || data.condition.code === 1009 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-windy.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1030 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-mist.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1063 ||
        data.condition.code === 1069 ||
        data.condition.code === 1072 ||
        data.condition.code === 1150 ||
        data.condition.code === 1153 ||
        data.condition.code === 1168 ||
        data.condition.code === 1171 ||
        data.condition.code === 1180 ||
        data.condition.code === 1183 ||
        data.condition.code === 1186 ||
        data.condition.code === 1189 ||
        data.condition.code === 1192 ||
        data.condition.code === 1240 ||
        data.condition.code === 1243 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-partly-shower.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1066 ||
        data.condition.code === 1210 ||
        data.condition.code === 1216 ||
        data.condition.code === 1222 ||
        data.condition.code === 1249 ||
        data.condition.code === 1252 ||
        data.condition.code === 1255 ||
        data.condition.code === 1258 ||
        data.condition.code === 1261 ||
        data.condition.code === 1264 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-snow-sunny.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1087 || data.condition.code === 1282 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-thunder.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1114 ||
        data.condition.code === 1117 ||
        data.condition.code === 1204 ||
        data.condition.code === 1207 ||
        data.condition.code === 1213 ||
        data.condition.code === 1219 ||
        data.condition.code === 1225 ||
        data.condition.code === 1237 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-snow.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1135 || data.condition.code === 1147 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-mist.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1195 ||
        data.condition.code === 1198 ||
        data.condition.code === 1201 ||
        data.condition.code === 1246 ||
        data.condition.code === 1276 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-storm.json')}
          style={stylesCondition}
        />
      ) : data.condition.code === 1273 || data.condition.code === 1279 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-stormshowersday.json')}
          style={stylesCondition}
        />
      ) : (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-windy.json')}
          style={stylesCondition}
        />
      )}
    </View>
  );
};

export default WeatherAnimations;

const styles = StyleSheet.create({
  currentAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },

  lottie: {
    height: 210,
    width: 210,
  },

  lottieOne: {
    height: 125,
    width: 125,
  },

  lottieZero: {
    height: 60,
    width: 60,
  },
});
