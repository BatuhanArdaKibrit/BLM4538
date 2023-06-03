export const getWeather = async () => {

  const responseDeneme = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=6a03dc197c974bac939112527221204&q=London&days=3&aqi=no&alerts=no
    `
  );
  const dataDeneme = await responseDeneme.json();

  return { dataDeneme };
};
