import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Loader from "../Loader";
import TvShow from "./TvShow";

const TvSearcher = () => {
  const [inputData, setInputData] = useState("");
  const [queryToUrl, setQueryToUrl] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShows = async () => {
      setShows([]);
      setInputData(null);
      document.querySelector(".search").value = "";

      let res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${queryToUrl}`
        ),
        json = await res.json();

      json.forEach((el) => {
        let show = {
          key: el.show.id,
          name: el.show.name,
          text: el.show.summary
            ? el.show.summary.replace(/<[^>]*>/g, "")
            : "Sin descripción",
          img: el.show.image
            ? el.show.image.medium
            : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png",
          url: el.show.url ? el.show.url : "#",
        };
        setShows((shows) => [...shows, show]);
      });
      setLoading(false);
    };
    getShows();
  }, [queryToUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await setInputData(null);

    if (!inputData) {
      await setShows([]);
      alert("Ingrese datos para una nueva búsqueda");
      return;
    }

    await setQueryToUrl(inputData);
  };

  const handleChange = (e) => {
    setInputData(e.target.value.toLowerCase());
  };

  return (
    <Card body className="bg-transparent border-glass">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input
              className="form-control search"
              type="search"
              id="search"
              placeholder="Buscar shows de tv..."
              autoComplete="off"
              onChange={handleChange}
              /* value={inputData} */
            />
          </Col>
          <Col className="d-grid gap-2">
            <input type="submit" value="Buscar" className="btn btn-secondary" />
          </Col>
        </Row>
      </form>
      <Row className="gap-1 mt-3 align-items-center justify-content-around ">
        {loading && <Loader />}
        {shows &&
          !loading &&
          shows.map((show) => (
            <TvShow
              key={show.key}
              name={show.name}
              text={show.text}
              img={show.img}
              url={show.url}
            />
          ))}
      </Row>
    </Card>
  );
};

export default TvSearcher;
