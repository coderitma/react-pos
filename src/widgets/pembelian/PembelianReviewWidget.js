import PembelianService from "../../services/PembelianService";

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
};

export default PembelianReviewWidget;
