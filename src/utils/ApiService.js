export default async function ApiService(lat, long) {
  return fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=6a03dc197c974bac939112527221204&q=${lat},${long}&days=3&aqi=no&alerts=no`
  )
    .then((data) => {
      return data.json();
    })
    .catch((error) => console.log(error));
}
