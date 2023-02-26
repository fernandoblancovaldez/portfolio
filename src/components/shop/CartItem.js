import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { name, id, price, url, quantity } = data;
  return (
    <ListGroup.Item className="d-flex align-items-center gap-2 py-2">
      <Image style={{ width: "5rem" }} rounded src={url} alt={name} />

      <Col>
        <Row>
          <p className="lh-sm m-0 fs-5 fw-bold">{name}</p>
        </Row>
        <Row>
          <small className="lh-sm mb-1">
            ${price}.00 x {quantity} = $ {price * quantity}.00
          </small>
        </Row>
        <Row>
          <ButtonGroup
            aria-label="First group"
            size="sm"
            style={{ width: "10rem" }}
          >
            <Button variant="secondary" onClick={() => delOneFromCart(id)}>
              -1
            </Button>
            <Button
              variant="secondary"
              onClick={() => delAllFromCart(id, true)}
            >
              Quitar item
            </Button>
          </ButtonGroup>
        </Row>
      </Col>
    </ListGroup.Item>
  );
};

export default CartItem;
