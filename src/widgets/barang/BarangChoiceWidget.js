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
};

export default BarangChoiceWidget;
