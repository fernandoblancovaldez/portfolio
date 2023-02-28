import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartItem from "./CartItem";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { delFromCart } from "../../actions/shopActions";
import { STRIPE_KEYS } from "../../assets/STRIPE_KEYS.js";
//import Stripe from "https://js.stripe.com/v3/";

function Cart() {
  const [show, setShow] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.shop;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSend = (cart) => {
    let dataToSend = [];
    cart.forEach((item) => {
      let { price, quantity } = item;
      dataToSend = [...dataToSend, { price, quantity }];
    });

    console.log(dataToSend);

    /* Stripe(STRIPE_KEYS.public).redirectToCheckout({
      lineItems: dataToSend,
      mode: "subscription",
      successUrl: "http://127.0.0.1:5500/assets/stripe-success.html",
      cancelUrl: "http://127.0.0.1:5500/assets/stripe-cancel.html",
    }); */
  };

  return (
    <>
      <Button
        className="d-flex justify-content-center"
        variant="dark"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="bg-transparent"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Orden de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="align-items-center">
            {cart.length < 1 ? (
              <p className="m-0">😺 invitame la cena por favor, miau</p>
            ) : (
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  data={item}
                  delOneFromCart={() => dispatch(delFromCart(item.id))}
                  delAllFromCart={() => dispatch(delFromCart(item.id, true))}
                />
              ))
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={() => handleSend(cart)}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
