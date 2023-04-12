import { useEffect, useState } from "react";
import PembelianService from "../../services/PembelianService";
import { useNavigate } from "react-router-dom";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PemasokChoiceWidget from "../../widgets/pemasok/PemasokChoiceWidget";

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

  const handleInputDaftarBarang = (e, index) => {
    const { name, value } = e.target;

    setDaftarBarang((values) => {
      const result = [...values];
      result[index][name] = value;
      return result;
    });
  };

  const handleRemoveItem = (index) => {
    setDaftarBarang((values) => {
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

  useEffect(() => {
    let sum = 0;
    if (daftarBarang.length > 0) {
      for (let itemBeli of daftarBarang) {
        sum += itemBeli.hargaBeli * parseInt(itemBeli.jumlahBeli);
      }
    }
    setPembelian((values) => ({ ...values, item: daftarBarang, total: sum }));
  }, [daftarBarang]);

  useEffect(() => {
    setPembelian((values) => ({ ...values, pemasok }));
  }, [pemasok]);

  return (
    <>
      <NavigationWidget
        actionTop={
          <>
            <Button
              onClick={() => navigate("/pembelian")}
              variant={"secondary me-2"}>
              <FaArrowLeft /> Kembali
            </Button>
            <Button onClick={handlePembelianServiceCreate}>
              <FaSave /> Simpan
            </Button>
          </>
        }>
        <Row className="mb-5">
          <Col md={7}>
            {JSON.stringify(pembelian)}
            <Card>
              <Card.Header>Pembelian</Card.Header>
              <Card.Body>
                <Form.Group className="mt-2">
                  <Form.Label>Faktur</Form.Label>
                  <Form.Control
                    name="faktur"
                    type="text"
                    isInvalid={!pembelian.faktur}
                    value={pembelian.faktur || ""}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    name="tanggal"
                    type="date"
                    isInvalid={!pembelian.tanggal}
                    value={pembelian.tanggal || ""}
                    onChange={handleInput}
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            <Card className="mt-4">
              <Card.Header>Pemasok</Card.Header>
              <Card.Body>
                <PemasokChoiceWidget
                  onlyButton={false}
                  callbackPemasokChoiceWidget={callbackPemasokChoiceWidget}
                />
              </Card.Body>
            </Card>

            <Card className="mt-4">
              <Card.Header>Daftar Item</Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col md={5}>// TODO: review pembelian invoice / faktur widget</Col>
        </Row>
      </NavigationWidget>
    </>
  );
};

export default PembelianAddPage;
