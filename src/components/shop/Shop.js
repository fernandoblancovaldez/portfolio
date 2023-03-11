import React, { useEffect, useState } from "react";
import { Card, Row, Col, Alert, Image } from "react-bootstrap";
import Cart from "./Cart";
import StoreItem from "./StoreItem";
import Ulises from "../../assets/shop-ulises.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { clearShop, readShopData } from "../../actions/shopActions";
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
      Promise.all([
        fetch(itemsURL, fetchOptions),
        fetch(pricesURL, fetchOptions),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((json) => dispatch(readShopData(json)))
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

    return () => {
      setError(null);
      dispatch(clearShop());
    };
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
          <StoreItem key={item.id} data={item} />
        ))}
      </Row>
    </Card>
  );
};

export default Shop;
