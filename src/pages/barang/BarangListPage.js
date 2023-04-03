import { useEffect, useState } from "react";

const BarangListPage = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // code run here
    setCounter(counter + 1);
  }, [status]);

  return <h1 onClick={() => setStatus(!status)}>Barang List Page {counter}</h1>;
};

export default BarangListPage;
