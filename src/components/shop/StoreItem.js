import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PlusCircleFill } from "react-bootstrap-icons";

const StoreItem = ({ data, addToCart }) => {
  let { name, id, fullPrice, url } = data;

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
          <small>{fullPrice}</small>
        </Card.Text>
        <Button
          className="btn btn-success btn-sm d-flex justify-content-center align-items-center"
          onClick={() => addToCart(id)}
        >
          <PlusCircleFill size="1rem" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
