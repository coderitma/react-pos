import { useState } from "react";

const initPembelian = {
  faktur: null,
  tanggal: null,
  total: 0,
  dibayar: 0,
  kembali: 0,
  kodePemasok: null,
};

const initPemasok = {
  kodePemasok: null,
  namaPemasok: null,
  alamatPemasok: null,
  teleponPemasok: null,
};

const PembelianAddPage = () => {
  const [pembelian, setPembelian] = useState(initPembelian);
  const [item, setItem] = useState([]);
  const [pemasok, setPemasok] = useState(initPemasok);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPembelian((values) => ({ ...values, [name]: value }));
  };

  const handleInputItem = (e, index) => {
    const { name, value } = e.target;

    setItem((values) => {
      const result = [...values];
      result[index][name] = value;
      return result;
    });
  };

  const handleRemoveItem = (index) => {
    setItem((values) => {
      const result = [...values];
      result.splice(index, 1);
      return result;
    });
  };
};

export default PembelianAddPage;
