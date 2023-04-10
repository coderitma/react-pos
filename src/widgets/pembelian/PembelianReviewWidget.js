import { Button, Modal, Table } from "react-bootstrap";
import PembelianService from "../../services/PembelianService";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { helperReadableDate } from "../../utils/helpers";

const PembelianReviewWidget = ({ attr, faktur }) => {
  const [pembelian, setPembelian] = useState();
  const [show, setShow] = useState(false);

  const handlePembelianServiceGet = () => {
    PembelianService.get(faktur).then((response) => {
      setShow(true);
      setPembelian(response.data);
    });
  };

  const handleFakturPrint = async () => {
    await PembelianService.fakturPrint(faktur);
  };

  return (
    <>
      <Button {...attr} onClick={handlePembelianServiceGet}>
        <FaSearchPlus />
      </Button>

      {pembelian && (
        <Modal show={show} onHide={() => setShow(false)} size={"lg"}>
          <Modal.Header closeButton>
            <Modal.Title>
              Faktur No. {pembelian.faktur || "Nomor faktur..."}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{helperReadableDate(pembelian.tanggal)}</Modal.Body>
          <Table>
            <tbody>
              <tr>
                <th>Kode Pemasok</th>
                <td>{pembelian.pemasok.kodePemasok}</td>
              </tr>
              <tr>
                <th>Nama Pemasok</th>
                <td>{pembelian.pemasok.namaPemasok}</td>
              </tr>
              <tr>
                <th>Alamat Pemasok</th>
                <td>{pembelian.pemasok.alamatPemasok}</td>
              </tr>
              <tr>
                <th>Telepon Pemasok</th>
                <td>{pembelian.pemasok.teleponPemasok}</td>
              </tr>
            </tbody>
          </Table>
        </Modal>
      )}
    </>
  );
};

export default PembelianReviewWidget;
