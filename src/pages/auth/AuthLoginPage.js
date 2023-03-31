import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };
};

export default AuthLoginPage;
