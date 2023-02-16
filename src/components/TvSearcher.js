import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";
import Show from "./Show";

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
      let newSearchedShows = [];
      let res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${queryToUrl}`
        ),
        json = await res.json();
      //console.log(json);
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
        newSearchedShows = [...newSearchedShows, show];

        /* console.log(newSearchedShows); */
      });
      setShows(newSearchedShows);
      /* console.log(shows); */
    };
    getShows();
    setLoading(false);
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
    <Card body className="glass">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input
              className="form-control search"
              type="search"
              id="search"
              placeholder="Buscar shows de tv..."
              autocomplete="off"
              onChange={handleChange}
              /* value={inputData} */
            />
          </Col>
          <Col className="d-grid gap-2">
            <input type="submit" value="Buscar" className="btn btn-secondary" />
          </Col>
        </Row>
      </form>
      <Row className="gap-lg-1 mt-3 align-items-center justify-content-center ">
        {loading && <Loader />}
        {shows &&
          !loading &&
          shows.map((show) => (
            <Show
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
