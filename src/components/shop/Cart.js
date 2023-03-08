import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import CartItem from "./CartItem";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../../actions/shopActions";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_KEYS } from "../../assets/STRIPE_KEYS.js";
import {
  BoxArrowLeft,
  CheckAll,
  Cart2,
  Receipt,
  ArrowClockwise,
} from "react-bootstrap-icons";
import Loader from "../Loader";
import Alert from "react-bootstrap/Alert";

const stripePromise = loadStripe(STRIPE_KEYS.public);

function Cart() {
  const [show, setShow] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { cart } = state.shop;

  const handleSend = async (cart) => {
    setLoading(true);
    setError(null);
    const stripe = await stripePromise;
    let dataToSend = [];

    cart.forEach((item) => {
      let { price, quantity } = item;
      dataToSend = [...dataToSend, { price, quantity }];
    });

    stripe
      .redirectToCheckout({
        lineItems: dataToSend,
        mode: "subscription",
        successUrl: "https://cvfernandoblanco2023.netlify.app/#/gracias",
        cancelUrl: "https://cvfernandoblanco2023.netlify.app/#/portfolio",
      })
      .catch((err) => {
        //console.log(err);
        let message =
          err.statusText ||
          "Ocurrió un error al conectarse con el API de Stripe";
        setError(message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <ButtonGroup
        aria-label="First group"
        size="sm"
        style={{ width: "10rem" }}
      >
        {cart.length >= 1 ? (
          <>
            <Button
              className="d-flex justify-content-center align-items-center"
              variant="dark"
              onClick={() => setShow(true)}
            >
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-0 translate-middle border border-light"
              >
                {cart.length}
              </Badge>
              <Cart2 size="1.5rem" />
            </Button>

            <Button
              className="d-flex justify-content-center align-items-center"
              variant="secondary"
              onClick={() => dispatch(clearCart())}
            >
              <ArrowClockwise size="1.5rem" />
            </Button>
          </>
        ) : (
          <>
            <Button
              disabled
              className="d-flex justify-content-center align-items-center"
              variant="dark"
            >
              <Cart2 size="1.5rem" />
            </Button>
            <Button
              disabled
              className="d-flex justify-content-center align-items-center"
              variant="secondary"
            >
              <ArrowClockwise size="1.5rem" />
            </Button>
          </>
        )}
      </ButtonGroup>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setError(null);
        }}
        backdrop="static"
        keyboard={false}
        className="bg-transparent"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Receipt size="2rem" /> Orden de compra
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="align-items-center">
            {cart.length < 1 ? (
              <p className="m-0">😺 invitame la cena por favor, miau</p>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  data={item}
                  addToCart={() => dispatch(addToCart(item.id))}
                  delOneFromCart={() => dispatch(delFromCart(item.id))}
                  delAllFromCart={() => dispatch(delFromCart(item.id, true))}
                />
              ))
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          {error && (
            <Col className="col-12">
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            </Col>
          )}
          {loading && <Loader />}
          <Button
            variant="secondary"
            className="d-flex justify-content-center align-items-center"
            onClick={() => {
              setShow(false);
              setError(null);
            }}
          >
            <BoxArrowLeft size="1.5rem" />
          </Button>
          {cart.length >= 1 ? (
            <Button
              variant="success"
              className="d-flex justify-content-center align-items-center"
              onClick={() => handleSend(cart)}
            >
              <CheckAll size="1.5rem" />
            </Button>
          ) : (
            <Button
              variant="success"
              className="d-flex justify-content-center align-items-center"
              disabled
            >
              <CheckAll size="1.5rem" />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
