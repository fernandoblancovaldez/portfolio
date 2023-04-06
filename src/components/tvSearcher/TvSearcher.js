import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearShows, searchShow } from "../../actions/tvSearcherActions";
import { Button, Row, Card, Spinner } from "react-bootstrap";
import { Trash3Fill, Search } from "react-bootstrap-icons";
import TvShow from "./TvShow";

const TvSearcher = () => {
  const state = useSelector((state) => state);
  const { shows, loading } = state.tvSearcher;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = document.querySelector("#tv-show-search").value.toLowerCase();
    dispatch(searchShow(query));
    document.querySelector("#tv-show-search").value = null;
  };

  return (
    <Card body className="bg-transparent border-glass">
      <form onSubmit={handleSubmit}>
        <Row>
          <div className="input-group">
            <input
              className="form-control search"
              type="search"
              id="tv-show-search"
              placeholder="Buscar shows de tv..."
              autoComplete="off"
              required
            />
            {shows.length > 0 ? (
              <Button
                className="d-flex justify-content-center align-items-center"
                variant="dark"
                onClick={() => dispatch(clearShows())}
              >
                <Trash3Fill />
              </Button>
            ) : (
              <Button
                disabled
                className="d-flex justify-content-center align-items-center"
                variant="dark"
              >
                <Trash3Fill />
              </Button>
            )}
            <Button
              type="submit"
              className="d-flex justify-content-center align-items-center"
              variant="dark"
            >
              {loading ? <Spinner size="sm" /> : <Search />}
            </Button>
          </div>
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
