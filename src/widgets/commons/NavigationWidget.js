import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import { VscAzure } from "react-icons/vsc";
import { FaTable } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavigationWidget = ({ children, buttonCreate, actionTop }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <VscAzure className="text-primary" size={"1.5em"} />
            &nbsp;&nbsp;&nbsp;Zen App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <div className="d-flex">{actionTop}</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col md={2}>
            {buttonCreate}
            <Nav className="flex-column">
              <Nav.Link disabled>
                <FaTable /> Master
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/barang")}>Barang</Nav.Link>
            </Nav>
          </Col>
          <Col md={10}>{children}</Col>
        </Row>
      </Container>
    </>
  );
};

export default NavigationWidget;
