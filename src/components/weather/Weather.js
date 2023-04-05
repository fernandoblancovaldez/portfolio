import React, { useEffect } from "react";
import { Card, Row, Button, Spinner } from "react-bootstrap";
import { GeoAltFill, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  readWeather,
  searchInputWeather,
  searchLocalWeather,
} from "../../actions/weatherActions";
import WeatherData from "./WeatherData";

const Weather = () => {
  const state = useSelector((state) => state);
  const { dataToApi, loading } = state.weather;
  const dispatch = useDispatch();

  useEffect(() => {
    !dataToApi
      ? dispatch(searchLocalWeather())
      : dispatch(readWeather(dataToApi));
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
    document.querySelector("#weather-search").value = "";
  };

  return (
    <Card className="glass-dark text-dark border-glass shadow py-3 gap-3 text-center align-items-center max-w-weather mx-auto">
      <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <div className="input-group">
            <input
              id="weather-search"
              type="search"
              className="form-control"
              placeholder="Ingresa tu ciudad..."
              required
            />
            <Button
              className="btn-dark border-0 mx-auto d-flex align-items-center justify-content-center"
              type="submit"
            >
              <Search />
            </Button>
            <Button
              className="btn-dark border-0 mx-auto d-flex align-items-center justify-content-center"
              onClick={handleCurrentLocate}
            >
              <GeoAltFill />
            </Button>
          </div>
        </Row>
      </form>
      {loading ? <Spinner /> : <WeatherData />}
    </Card>
  );
};

export default Weather;
