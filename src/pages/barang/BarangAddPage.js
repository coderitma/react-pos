import { useState } from "react";

const BarangAddPage = () => {
  const [barang, setBarang] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBarang((values) => ({ ...values, [name]: value }));
  };
};

export default BarangAddPage;
