import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const POSPage = () => {
  const inlineTransaction = () => {
    return (
      <Card>
        <Card.Header>Transaksi</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };

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
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Row>
              {inlineCard("Produk 1")}
              {inlineCard("Produk 2")}
              {inlineCard("Produk 3")}
            </Row>
          </Col>
          <Col md={4}>{inlineTransaction()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default POSPage;
