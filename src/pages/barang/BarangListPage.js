import { useEffect, useState } from "react";
import HTTPService from "../../services/HTTPService";
import AuthService from "../../services/AuthService";
import { Card, Table } from "react-bootstrap";
import BarangService from "../../services/BarangService";
import NavigationWidget from "../../widgets/commons/NavigationWidget";

const BarangListPage = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);

  useEffect(() => {
    BarangService.list()
      .then((response) => {
        setDaftarBarang(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NavigationWidget>
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
    </NavigationWidget>
  );
};

export default BarangListPage;
