import React, { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Col,
  ListGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import {
  BoxArrowLeft,
  CheckAll,
  Cart2,
  Receipt,
  Trash3Fill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions/shopActions";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_KEYS } from "../../assets/STRIPE_KEYS.js";
import CartItem from "./CartItem";

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
              <Trash3Fill size="1.5rem" />
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
              <Trash3Fill size="1.5rem" />
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
              cart.map((item) => <CartItem key={item.id} data={item} />)
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
          <Button
            variant="secondary"
            className="d-flex justify-content-center align-items-center"
            onClick={() => {
              setShow(false);
              setError(null);
            }}
            size="lg"
          >
            {loading ? <Spinner size="sm" /> : <BoxArrowLeft />}
          </Button>
          {cart.length >= 1 ? (
            loading ? (
              <Button
                variant="success"
                className="d-flex justify-content-center align-items-center"
                disabled
                size="lg"
              >
                <Spinner size="sm" />
              </Button>
            ) : (
              <Button
                variant="success"
                className="d-flex justify-content-center align-items-center"
                onClick={() => handleSend(cart)}
                size="lg"
              >
                <CheckAll />
              </Button>
            )
          ) : (
            <Button
              variant="success"
              className="d-flex justify-content-center align-items-center"
              disabled
              size="lg"
            >
              <CheckAll />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
