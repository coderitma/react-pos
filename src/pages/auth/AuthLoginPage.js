import { useState } from "react";
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
};

export default AuthLoginPage;
