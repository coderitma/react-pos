import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BarangService from "../../services/BarangService";

const BarangEditPage = () => {
  const navigate = useNavigate();
  const { kodeBarang } = useParams();
  const [barang, setBarang] = useState({});

  useEffect(() => {
    BarangService.get(kodeBarang).then((response) => {
      setBarang(response.data);
    });
  }, [kodeBarang]);
  return <p>{JSON.stringify(barang)}</p>;
};

export default BarangEditPage;
