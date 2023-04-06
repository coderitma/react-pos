import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import PembelianService from "../../services/PembelianService";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaEdit, FaPlusCircle, FaSearch } from "react-icons/fa";
import Paginator from "../../widgets/commons/Paginator";
import { useNavigate } from "react-router-dom";
// import PembelianSearchInlineWidget from "../../widgets/pembelian/PembelianSearchInlineWidget";

const PembelianListPage = () => {
  const navigate = useNavigate();
  const [daftarPembelian, setDaftarPembelian] = useState([]);
  const [paginatePembelian, setPaginatePembelian] = useState({});
  const [queryPembelian, setQueryPembelian] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    PembelianService.list(queryPembelian).then((response) => {
      setDaftarPembelian(response.data);
      if (response.headers.pagination) {
        setPaginatePembelian(JSON.parse(response.headers.pagination));
      }
    });
  }, [queryPembelian]);

  const callbackPaginator = (page) => {
    setQueryPembelian((values) => ({ ...values, page }));
  };

  const callbackPembelianSearchInlineWidget = (query) => {
    setQueryPembelian((values) => ({ ...values, ...query }));
  };

  return (
    <NavigationWidget
      buttonCreate={
        <Button className="w-100" onClick={() => navigate("/pembelian/add")}>
          <FaPlusCircle /> Tambah
        </Button>
      }>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>Daftar Pembelian</h5>
          <Paginator
            paginate={paginatePembelian}
            callbackPaginator={callbackPaginator}
          />
        </Card.Header>
        <Table>
          <thead>
            <tr>
              <th>Faktur</th>
              <th>Tanggal</th>
              <th>Total</th>
              <th>Kode Pemasok</th>
            </tr>
          </thead>
          <tbody>
            {daftarPembelian.map((pembelian, index) => (
              <tr key={index}>
                <td>{pembelian.faktur}</td>
                <td>{pembelian.tanggal}</td>
                <td>{pembelian.total}</td>
                <td>{pembelian.kodePemasok}</td>
                <td>
                  <Button>
                    <FaSearch />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default PembelianListPage;
