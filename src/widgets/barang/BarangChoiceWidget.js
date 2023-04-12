import { useEffect } from "react";
import BarangService from "../../services/BarangService";

const initQuery = { page: 1, limit: 7 };
const initBarang = {
  kodeBarang: null,
  namaBarang: null,
  hargaBeli: 0,
  hargaJual: 0,
  jumlahBarang: 0,
};

const BarangChoiceWidget = ({
  callbackBarangChoiceWidget,
  onlyButton = true,
}) => {
  const [show, setShow] = useState(false);
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [query, setQuery] = useState(initQuery);
  const [barangReview, setBarangReview] = useState(initBarang);

  const handleBarangServiceList = () => {
    BarangService.list(query)
      .then((response) => {
        setDaftarBarang(response.data);
      })
      .catch((error) => {});
  };

  const handleChoice = (barang) => {
    setBarangReview(barang);
    callbackBarangChoiceWidget(barang);
    setShow(false);
  };

  const callbackBarangSearchInlineWidget = (q) => {
    setQuery((values) => ({ ...values, ...q }));
  };

  useEffect(() => {
    handleBarangServiceList();
  }, [query]);
};

export default BarangChoiceWidget;
