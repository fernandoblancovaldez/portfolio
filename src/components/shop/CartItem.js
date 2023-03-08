import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Dash } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { XCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { delFromCart, addToCart } from "../../actions/shopActions";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
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
            style={{ width: "5rem" }}
          >
            <Button
              variant="secondary"
              className="d-flex justify-content-center align-items-center"
              onClick={() => dispatch(delFromCart(id))}
            >
              <Dash />
            </Button>
            <Button
              variant="secondary"
              className="d-flex justify-content-center align-items-center"
              onClick={() => dispatch(addToCart(id))}
            >
              <Plus />
            </Button>
            <Button
              variant="danger"
              className="d-flex justify-content-center align-items-center"
              onClick={() => dispatch(delFromCart(id, true))}
            >
              <XCircleFill />
            </Button>
          </ButtonGroup>
        </Row>
      </Col>
    </ListGroup.Item>
  );
};

export default CartItem;
