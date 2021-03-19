import { fetchWeatherData } from './weather.gateway';

export const WEATHER_DATA = 'WEATHER_DATA';

export const weatherDataAction = weatherData => ({
  type: WEATHER_DATA,
  payload: {
    weatherData,
  },
});

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(response => {
      dispatch(weatherDataAction(response));
    });
  };
};
