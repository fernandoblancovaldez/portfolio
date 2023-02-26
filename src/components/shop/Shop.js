import React, { useReducer } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Cart from "./Cart";
import { shopInitialState, shopReducer } from "../../reducers/shopReducer";
import StoreItem from "./StoreItem";
import { TYPES } from "../../actions/shopActions";
import Image from "react-bootstrap/Image";
import Ulises from "../../assets/shop-ulises.jpeg";

const Shop = () => {
  const [state, dispatch] = useReducer(shopReducer, shopInitialState);
  const { items, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const clearCart = () => {};
  return (
    <Card className="glass-dark text-dark border-glass shadow gap-2 align-items-center justify-content-around">
      <Row className="mt-2">
        <p className="fs-5 m-0">Comprame alimento por favor</p>
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

      <Row className="gap-1 container align-items-center justify-content-around">
        <Row className="justify-content-center">
          <ButtonGroup
            aria-label="First group"
            size="sm"
            style={{ width: "10rem" }}
          >
            <Cart cart={cart} delFromCart={delFromCart} />
            <Button variant="secondary" onClick={clearCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </Button>
          </ButtonGroup>
        </Row>

        {items.map((item) => (
          <StoreItem key={item.id} data={item} addToCart={addToCart} />
        ))}
      </Row>
    </Card>
  );
};

export default Shop;
