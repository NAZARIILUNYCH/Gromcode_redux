import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchingSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ getWeatherData, weatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      {weatherData.map(city => (
        <ul className="cities-list" key={city.id}>
          <li className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        </ul>
      ))}
    </main>
  );
};

const mapState = state => ({
  weatherData: fetchingSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
