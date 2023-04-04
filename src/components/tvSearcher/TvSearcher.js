import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearShows, searchShow } from "../../actions/tvSearcherActions";
import { ButtonGroup, Button, Row, Col, Card, Spinner } from "react-bootstrap";
import { Trash3Fill, Search } from "react-bootstrap-icons";
import TvShow from "./TvShow";

const TvSearcher = () => {
  const state = useSelector((state) => state);
  const { shows, loading } = state.tvSearcher;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = document.querySelector("#tv-show-search").value.toLowerCase();
    if (!query) {
      alert("Ingrese datos para una nueva búsqueda");
      return;
    } else {
      dispatch(searchShow(query));
    }

    document.querySelector("#tv-show-search").value = null;
  };

  return (
    <Card body className="bg-transparent border-glass">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <input
              className="form-control search"
              type="search"
              id="tv-show-search"
              placeholder="Buscar shows de tv..."
              autoComplete="off"
            />
          </Col>
          <Col className="col-auto">
            <ButtonGroup>
              <Button
                type="submit"
                className="d-flex justify-content-center align-items-center"
                variant="dark"
              >
                {loading ? <Spinner size="sm" /> : <Search size="1.5rem" />}
              </Button>
              {shows.length > 0 ? (
                <Button
                  className="d-flex justify-content-center align-items-center"
                  variant="dark"
                  onClick={() => dispatch(clearShows())}
                >
                  <Trash3Fill size="1.5rem" />
                </Button>
              ) : (
                <Button
                  disabled
                  className="d-flex justify-content-center align-items-center"
                  variant="dark"
                >
                  <Trash3Fill size="1.5rem" />
                </Button>
              )}
            </ButtonGroup>
          </Col>
        </Row>
      </form>
      {shows.length > 0 && (
        <Row className="gap-1 mt-3 align-items-center justify-content-around ">
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
      )}
    </Card>
  );
};

export default TvSearcher;
