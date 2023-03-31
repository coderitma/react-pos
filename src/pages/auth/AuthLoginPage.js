import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleAuthServiceLogin = () => {
    AuthService.login(user)
      .then((response) => {
        AuthService.saveToken(response.data.token);
        navigate("/barang");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-item-center">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/900/400?random=1"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthLoginPage;
