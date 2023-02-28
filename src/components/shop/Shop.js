import React, { useEffect /* , useState */ } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Cart from "./Cart";
import StoreItem from "./StoreItem";
import Image from "react-bootstrap/Image";
import Ulises from "../../assets/shop-ulises.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, readData } from "../../actions/shopActions";
import { STRIPE_KEYS } from "../../assets/STRIPE_KEYS.js";

const Shop = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { items } = state.shop;

  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsURL = "https://api.stripe.com/v1/products";
    const pricesURL = "https://api.stripe.com/v1/prices";
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
      },
    };

    const getData = async () => {
      //ssetLoading(true);

      Promise.all([
        fetch(itemsURL, fetchOptions),
        fetch(pricesURL, fetchOptions),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((json) => {
          const fetchedItems = json[0].data.map((item) => {
            let { id, name, images } = item;
            return { id, name, url: images[0] };
          });
          const fetchedPrices = json[1].data.map((item) => {
            let { id, product, currency, unit_amount } = item;
            return { product, amount: unit_amount, currency, price: id };
          });

          const items = fetchedItems.map((item) => {
            let itemPrice = fetchedPrices.filter(
              (el) => el.product === item.id
            );
            let { amount, currency, price } = itemPrice[0];
            let newItem = {
              ...item,
              amount,
              currency,
              price,
            };
            return newItem;
          });

          dispatch(readData(items));
        })
        .catch((err) => {
          //console.log(err);
          let message =
            err.statusText ||
            "Ocurrió un error al conectarse con el API de Stripe";
          console.log(`<p>Error ${err.status}: ${message}</p>`);
        });
      //setLoading(true);
    };
    getData();
  }, [dispatch]);

  console.log(items);

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

      <Row className="gap-1 container align-items-center justify-content-around">
        <Row className="justify-content-center">
          <ButtonGroup
            aria-label="First group"
            size="sm"
            style={{ width: "10rem" }}
          >
            <Cart />
            <Button variant="secondary" onClick={() => dispatch(clearCart())}>
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
