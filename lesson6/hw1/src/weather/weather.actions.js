import { fetchWeatherData } from './weather.gateway';

export const WEATHER_DATA = 'WEATHER_DATA';

export const weatherData = weatherFetching => ({
  type: WEATHER_DATA,
  payload: {
    weatherFetching,
  },
});

export const getWeatherData = () =>
  function (dispatch) {
    fetchWeatherData().then(response => {
      dispatch(weatherData(response));
    });
  };
