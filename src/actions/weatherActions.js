import { getLocation } from "../helpers/getLocation";
import { READ_WEATHER, SET_WEATHER_LOADING } from "../types";
const weatherApiKey = "6ec6130360ef0c0a8405d52ffaf7b224";

export const readWeather = (data) => {
  return (dispatch) => {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?${data}&units=metric&appid=${weatherApiKey}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: READ_WEATHER, payload: res });
      });
  };
};

export const searchLocalWeather = () => {
  return (dispatch) => {
    getLocation().then((coords) => {
      dispatch(readWeather(`lat=${coords.latitude}&lon=${coords.longitude}`));
    });
  };
};

export const searchInputWeather = (data) => {
  return (dispatch) => {
    dispatch(readWeather(`q=${data}`));
  };
};

export const setWeatherLoading = (boolean) => ({
  type: SET_WEATHER_LOADING,
  payload: boolean,
});
