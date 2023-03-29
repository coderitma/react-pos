import { useEffect, useState } from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { helperReadableCurrency } from "../utils/helpers";

const POSPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ]);
  const [productChoices, setProductChoices] = useState([]);

  useEffect(() => {
    if (productChoices.length > 0) {
      // for (product)
    }
  }, [productChoices]);

  const handleAddProduct = (product) => {
    product.quantity = 1;
    product.subtotal = 1 * product.price;
    setProductChoices((values) => [...values, product]);
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
          {productChoices.map((product, index) => (
            <ListGroup.Item key={index} className="">
              <p className="text-truncate">{product.title}</p>
              <div className="mb-2">
                {helperReadableCurrency(product.price)} x {product.quantity} ={" "}
                {helperReadableCurrency(product.subtotal)}
              </div>
              <Form.Control
                type="number"
                name="quantity"
                onChange={(e) => handleInputProductChoices(e, index)}
                value={product.quantity || ""}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  };

  const inlineCard = (product) => {
    const { id, price, title } = product;
    return (
      <Col key={id} md={4}>
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
