import { useEffect, useState } from "react";
import HTTPService from "../../services/HTTPService";
import AuthService from "../../services/AuthService";
import { Card, Table } from "react-bootstrap";

const BarangListPage = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);

  useEffect(() => {
    HTTPService.get("http://localhost:3000/barang", {
      headers: {
        "x-access-token": AuthService.getToken(),
      },
    })
      .then((response) => {
        setDaftarBarang(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Harga Jual</th>
            <th>Harga Beli</th>
            <th>Jumlah Barang</th>
          </tr>
        </thead>
        <tbody>
          {daftarBarang.map((barang, index) => (
            <tr key={index}>
              <td>{barang.kodeBarang}</td>
              <td>{barang.namaBarang}</td>
              <td>{barang.hargaJual}</td>
              <td>{barang.hargaBeli}</td>
              <td>{barang.jumlahBarang}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default BarangListPage;
