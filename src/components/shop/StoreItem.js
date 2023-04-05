import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import {
  DashCircleFill,
  XCircleFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addToCart, delFromCart } from "../../actions/shopActions";

const StoreItem = ({ data, cart }) => {
  const dispatch = useDispatch();
  let { name, id, fullPrice, url } = data;
  let { quantity } = cart.find((el) => el.id === id) || {};

  return (
    <Card className="p-0 border-glass fluid-card ">
      <Card.Img
        style={{ maxHeight: "10rem", objectFit: "contain" }}
        variant="top"
        src={url}
        alt={name}
        rounded
      />
      <Card.Body className="px-2 py-1">
        <Card.Title className="lh-sm m-0 fs-6 fw-semibold text-truncate">
          {name}
        </Card.Title>
        <Card.Text className="lh-sm mb-1">
          <small>{fullPrice}</small>{" "}
          {quantity && <small className="fw-bold">x {quantity}</small>}
        </Card.Text>
        <Col>
          <Row>
            <ButtonGroup
              aria-label="First group"
              size="sm"
              style={{ width: "5rem" }}
            >
              <Button
                className="btn btn-success btn-sm d-flex justify-content-center align-items-center"
                onClick={() => dispatch(addToCart(id))}
              >
                <PlusCircleFill size="1rem" />
              </Button>
              {quantity > 0 ? (
                <>
                  <Button
                    variant="success"
                    className="d-flex justify-content-center align-items-center"
                    onClick={() => dispatch(delFromCart(id))}
                  >
                    <DashCircleFill size="1rem" />
                  </Button>
                  <Button
                    variant="danger"
                    className="d-flex justify-content-center align-items-center"
                    onClick={() => dispatch(delFromCart(id, true))}
                  >
                    <XCircleFill />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    disabled
                    variant="success"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <DashCircleFill size="1rem" />
                  </Button>
                  <Button
                    disabled
                    variant="danger"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <XCircleFill />
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Row>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
