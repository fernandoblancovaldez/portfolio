import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StoreItem = ({ data, addToCart }) => {
  let { name, id, amount, url } = data;
  return (
    <Card style={{ width: "10rem" }} className="p-0 shadow my-2">
      <Card.Img variant="top" src={url} alt={name} />
      <Card.Body className="px-2 py-1">
        <Card.Title className="lh-sm m-0 fs-5 fw-semibold">{name}</Card.Title>
        <Card.Text className="lh-sm mb-1">
          <small>${amount}.00</small>
        </Card.Text>
        <Button className="btn btn-dark btn-sm" onClick={() => addToCart(id)}>
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
