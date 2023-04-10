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
};

export default PembelianAddPage;
