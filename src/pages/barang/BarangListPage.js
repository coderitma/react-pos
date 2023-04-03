import { useEffect, useState } from "react";
import HTTPService from "../../services/HTTPService";
import AuthService from "../../services/AuthService";

const BarangListPage = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);

  useEffect(() => {
    HTTPService.get("http://localhost:3000/barang", {
      headers: {
        "x-access-token": AuthService.getToken(),
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1>Barang List Page</h1>;
};

export default BarangListPage;
