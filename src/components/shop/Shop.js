import React, { useEffect } from "react";
import { Card, Row, Col, Alert, Image, Spinner } from "react-bootstrap";
import Cart from "./Cart";
import StoreItem from "./StoreItem";
import Ulises from "../../assets/shop-ulises.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  clearShop,
  readShopData,
  setShopError,
} from "../../actions/shopActions";

const Shop = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { items, cart, loading, error } = state.shop;

  useEffect(() => {
    dispatch(readShopData());

    return () => {
      dispatch(setShopError(null));
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
        {loading && <Spinner />}
        {items.map((item) => (
          <StoreItem key={item.id} data={item} cart={cart} />
        ))}
      </Row>
    </Card>
  );
};

export default Shop;
