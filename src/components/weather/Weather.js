import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  readWeather,
  searchInputWeather,
  searchLocalWeather,
} from "../../actions/weatherActions";
import WeatherData from "./WeatherData";

const Weather = () => {
  const state = useSelector((state) => state);
  const { weatherInfo, dataToApi } = state.weather;
  const dispatch = useDispatch();

  useEffect(() => {
    dataToApi
      ? dispatch(readWeather(dataToApi))
      : dispatch(searchLocalWeather());
  }, [dispatch, dataToApi]);

  const handleCurrentLocate = (e) => {
    e.preventDefault();
    dispatch(searchLocalWeather());
    document.querySelector("#weather-search").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = document.querySelector("#weather-search").value;
    dispatch(searchInputWeather(query));
  };

  return (
    <Card className="glass-dark text-dark border-glass shadow py-3 gap-3 text-center align-items-center max-w-weather mx-auto">
      <Col>
        <button
          className="btn-animation text-secondary bg-transparent border-0 mx-auto d-flex align-items-center justify-content-center"
          onClick={handleCurrentLocate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </button>
      </Col>
      <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <div className="input-group">
            <input
              id="weather-search"
              type="search"
              className="form-control bg-transparent"
              placeholder="Ingresa tu ciudad..."
            />
            <button
              className="btn btn-outline-secondary border-secondary"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </Row>
      </form>
      {weatherInfo && <WeatherData />}
    </Card>
  );
};

export default Weather;
