import { useState } from "react";
import BarangService from "../../services/BarangService";
import { useNavigate } from "react-router-dom";

const BarangAddPage = () => {
  const navigate = useNavigate();
  const [barang, setBarang] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBarang((values) => ({ ...values, [name]: value }));
  };

  const handleBarangServiceCreate = () => {
    BarangService.create(barang).then((response) => {
      alert("Barang berhasil ditambahkan.");
      navigate("/barang");
    });
  };
};

export default BarangAddPage;
