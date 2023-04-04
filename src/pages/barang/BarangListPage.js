import { useEffect, useState } from "react";
import HTTPService from "../../services/HTTPService";
import AuthService from "../../services/AuthService";
import { Button, Card, Table } from "react-bootstrap";
import BarangService from "../../services/BarangService";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaPlusCircle } from "react-icons/fa";

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
    <NavigationWidget
      buttonCreate={
        <Button>
          <FaPlusCircle /> Tambah
        </Button>
      }>
      <Card>
        <Card.Header>
          <h5>Daftar Barang</h5>
        </Card.Header>
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
