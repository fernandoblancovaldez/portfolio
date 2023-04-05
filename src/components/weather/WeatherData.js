import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { MoonStarsFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const WeatherData = () => {
  const state = useSelector((state) => state);
  const { weatherInfo } = state.weather;
  return (
    <>
      <Row>
        <h3 className="fw-semibold fs-4 m-0">{weatherInfo.name}</h3>
      </Row>
      <Col>
        <img
          src={`https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
          alt={weatherInfo.weather[0].main}
          width="100"
          height="100"
        />
      </Col>
      <Col>
        <h3 className="hero-font fw-light fs-1 m-0">
          {Math.round(weatherInfo.main.temp)}°C
        </h3>
        <Row>
          <small className="fw-bold mb-0">
            {weatherInfo.weather[0].description.charAt(0).toUpperCase()}
            {weatherInfo.weather[0].description.slice(1)}
          </small>
        </Row>
        <Row>
          <small className="fw-bold mb-0">
            Máx.: {Math.round(weatherInfo.main.temp_max)}° Min.:{" "}
            {Math.round(weatherInfo.main.temp_min)}°
          </small>
        </Row>
      </Col>
      <Card className="container bg-transparent border-glass mx-auto">
        <Row>
          <small className="text-start">
            Se esperan temperaturas más bajas mañana, con una máxima de 19° .
          </small>
        </Row>
        <hr className="my-0" />
        <Row>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">Ahora</small>
              <MoonStarsFill />
              <small className="fw-bold">12°</small>
            </Row>
          </Col>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">00</small>
              <MoonStarsFill />
              <small className="fw-bold">11°</small>
            </Row>
          </Col>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">01</small>
              <MoonStarsFill />
              <small className="fw-bold">11°</small>
            </Row>
          </Col>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">02</small>
              <MoonStarsFill />
              <small className="fw-bold">10°</small>
            </Row>
          </Col>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">03</small>
              <MoonStarsFill />
              <small className="fw-bold">10°</small>
            </Row>
          </Col>
          <Col className="col-2 px-0">
            <Row>
              <small className="fw-semibold">04</small>
              <MoonStarsFill />
              <small className="fw-bold">10°</small>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default WeatherData;
