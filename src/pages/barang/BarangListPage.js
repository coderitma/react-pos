import { useEffect, useState } from "react";
import HTTPService from "../../services/HTTPService";
import AuthService from "../../services/AuthService";
import { Button, Card, Table } from "react-bootstrap";
import BarangService from "../../services/BarangService";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaPlusCircle } from "react-icons/fa";
import Paginator from "../../widgets/commons/Paginator";
import BarangSearchInlineWidget from "../../widgets/barang/BarangSearchInlineWidget";

const BarangListPage = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [paginateBarang, setPaginateBarang] = useState({});
  const [queryBarang, setQueryBarang] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    BarangService.list(queryBarang)
      .then((response) => {
        setDaftarBarang(response.data);
        if (response.headers.pagination) {
          setPaginateBarang(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryBarang]);

  const callbackPaginator = (page) => {
    setQueryBarang((values) => ({ ...values, page }));
  };

  return (
    <NavigationWidget
      actionTop={
        <BarangSearchInlineWidget
          isShowKodeBarang={true}
          callbackBarangSearchInlineWidget={() => {}}
        />
      }
      buttonCreate={
        <Button>
          <FaPlusCircle /> Tambah
        </Button>
      }>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>Daftar Barang</h5>
          <Paginator
            paginate={paginateBarang}
            callbackPaginator={callbackPaginator}
          />
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
