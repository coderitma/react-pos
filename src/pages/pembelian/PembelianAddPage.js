import { useState } from "react";
import PembelianService from "../../services/PembelianService";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [pembelian, setPembelian] = useState(initPembelian);
  const [daftarBarang, setDaftarBarang] = useState([]);
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

  const handlePembelianServiceCreate = () => {
    PembelianService.create(pembelian)
      .then((response) => {
        const printFaktur = window.confirm("Cetak faktur?");
        if (printFaktur) {
          PembelianService.fakturPrint(response.data.faktur);
        }
        navigate("/pembelian");
      })
      .catch((error) => {});
  };

  const callbackPemasokChoiceWidget = (data) => {
    setPemasok(data);
  };

  const callbackBarangChoiceWidget = (data) => {
    setDaftarBarang((values) => {
      const result = [...values];
      data.subtotal = data.jumlahBeli * data.hargaBeli;
      result.push(data);
      return result;
    });
  };
};

export default PembelianAddPage;
