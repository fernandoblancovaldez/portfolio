import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { name, id, url, fullPrice, quantity } = data;
  return (
    <ListGroup.Item className="d-flex gap-2 col-12 align-items-center justify-content-between py-2">
      <Image
        className="mx-auto"
        style={{ maxHeight: "5rem", maxWidth: "2.7rem", objectFit: "contain" }}
        rounded
        src={url}
        alt={name}
      />
      <Col>
        <Row>
          <p className="lh-sm m-0 fs-5 fw-bold">{name}</p>
        </Row>
        <Row>
          <small className="lh-sm mb-1">
            {fullPrice} x {quantity}
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
