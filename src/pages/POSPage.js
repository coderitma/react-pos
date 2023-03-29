import { Card, Col, Container, Row } from "react-bootstrap";

const POSPage = () => {
  const inlineCard = (productName) => {
    return (
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>{productName}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              {inlineCard("Produk 1")}
              {inlineCard("Produk 2")}
              {inlineCard("Produk 3")}
            </Row>
          </Col>
          <Col md={4}>Panel Transaksi</Col>
        </Row>
      </Container>
    </>
  );
};

export default POSPage;
