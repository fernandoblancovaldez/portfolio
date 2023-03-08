import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Cart from "./Cart";
import StoreItem from "./StoreItem";
import Image from "react-bootstrap/Image";
import Ulises from "../../assets/shop-ulises.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, readData } from "../../actions/shopActions";
import { STRIPE_KEYS } from "../../assets/STRIPE_KEYS.js";
import Loader from "../Loader";

const Shop = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { items } = state.shop;

  useEffect(() => {
    const itemsURL = "https://api.stripe.com/v1/products";
    const pricesURL = "https://api.stripe.com/v1/prices";
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
      },
    };

    const getData = () => {
      setLoading(true);

      Promise.all([
        fetch(itemsURL, fetchOptions),
        fetch(pricesURL, fetchOptions),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((json) => dispatch(readData(json)))
        .catch((err) => {
          //console.log(err);
          let message =
            err.statusText ||
            "Ocurrió un error al conectarse con el API de Stripe";
          setError(`Error ${err.status}: ${message}`);
        })
        .finally(() => setLoading(false));
    };

    getData();
  }, [dispatch]);

  return (
    <Card className="glass-dark text-dark border-glass shadow gap-2 align-items-center justify-content-around">
      <Row className="mt-2">
        <p className="fs-5 my-3 hero-font">miau, comprame comida !</p>
      </Row>
      <Row>
        <Col>
          <Image
            style={{ width: "6rem" }}
            roundedCircle
            src={Ulises}
            thumbnail
            alt="Patrón de la app"
          />
        </Col>
      </Row>

      <Row className="gap-3 p-1 p-md-2 container align-items-center justify-content-around">
        <Row className="justify-content-center">
          <Cart />
        </Row>
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        {loading && <Loader />}
        {items.map((item) => (
          <StoreItem
            key={item.id}
            data={item}
            addToCart={() => dispatch(addToCart(item.id))}
          />
        ))}
      </Row>
    </Card>
  );
};

export default Shop;
