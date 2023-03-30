import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import {
  helperDuplicatedInArrayObject,
  helperReadableCurrency,
} from "../utils/helpers";
import { FaTrash } from "react-icons/fa";
import ProductService from "../services/ProductService";

const PPN = 0.11;

const POSPage = () => {
  const [products, setProducts] = useState([]);
  const [productChoices, setProductChoices] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    ProductService.list().then((response) => {
      setProducts(response.data);
    });

    if (productChoices.length > 0) {
      let sum = 0;
      productChoices.map((product) => {
        sum = sum + product.subtotal;
      });
      sum = sum * PPN + sum;
      setGrandTotal(sum);
    }
  }, [productChoices]);

  const handleAddProduct = (product) => {
    let isDuplicate = helperDuplicatedInArrayObject(
      product,
      "id",
      productChoices
    );
    if (isDuplicate) {
      alert("Produk sudah ada.");
    } else {
      product.quantity = 1;
      product.subtotal = 1 * product.price;
      setProductChoices((values) => [...values, product]);
    }
  };

  const handleDeleteProduct = (product) => {
    setProductChoices((values) => {
      let temp = [...values];
      let index = temp.indexOf(product);
      temp.splice(index, 1);
      return temp;
    });
  };

  const handleInputProductChoices = (e, i) => {
    setProductChoices((values) => {
      let temp = [...values];
      temp[i][e.target.name] = e.target.value;
      temp[i].subtotal = parseInt(e.target.value) * temp[i].price;
      return temp;
    });
  };

  const inlineTransaction = () => {
    return (
      <Card>
        <Card.Header>Transaksi</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{helperReadableCurrency(grandTotal)}</ListGroup.Item>

          {productChoices.map((product, index) => (
            <>
              <ListGroup.Item key={index} className="">
                <p className="text-truncate">
                  {product.title} <br />
                  {helperReadableCurrency(product.price)} x {product.quantity}{" "}
                  <br />
                  <Badge>{helperReadableCurrency(product.subtotal)}</Badge>
                </p>
                <div></div>
                <InputGroup className="mb-3 mt-2">
                  <Form.Control
                    type="number"
                    name="quantity"
                    isInvalid={!product.quantity || product.quantity === 0}
                    onChange={(e) => handleInputProductChoices(e, index)}
                    value={product.quantity || ""}
                  />
                  <Button
                    onClick={() => handleDeleteProduct(product)}
                    variant="outline-danger"
                    size="sm">
                    <FaTrash />
                  </Button>
                </InputGroup>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>
      </Card>
    );
  };

  const inlineCard = (product) => {
    const { id, price, title } = product;
    return (
      <Col key={id} md={4} className="mb-3">
        <Card
          style={{ cursor: "pointer" }}
          onClick={() => handleAddProduct(product)}>
          <Card.Body>
            <Card.Title className="text-truncate">{title}</Card.Title>
            <p>{price}</p>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Row>{products.map((product) => inlineCard(product))}</Row>
          </Col>
          <Col md={4}>{inlineTransaction()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default POSPage;
