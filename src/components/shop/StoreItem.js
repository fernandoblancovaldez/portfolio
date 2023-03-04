import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StoreItem = ({ data, addToCart }) => {
  let { name, id, fullPrice, url } = data;
  //console.log(amount, currency);
  /* const moneyFormat = (num) =>
    `$${num.slice(0, -2)}.${num.slice(-2)}${currency}`; */

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
        <Button className="btn btn-dark btn-sm" onClick={() => addToCart(id)}>
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
