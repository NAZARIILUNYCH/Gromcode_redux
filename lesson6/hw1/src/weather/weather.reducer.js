import { WEATHER_DATA } from './weather.actions';

const initialState = {
  weather: [],
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return {
        ...state,
        weather: action.payload.weatherFetching,
      };

    default:
      return state;
  }
};

export default weatherDataReducer;
