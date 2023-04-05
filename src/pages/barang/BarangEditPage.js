import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BarangEditPage = () => {
  const navigate = useNavigate();
  const { kodeBarang } = useParams();
  const [barang, setBarang] = useState({});

  return <h1>{kodeBarang}</h1>;
};

export default BarangEditPage;
