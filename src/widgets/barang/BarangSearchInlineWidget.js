const BarangSearchInlineWidget = ({
  attr,
  isShowKodeBarang,
  isShowNamaBarang,
  callbackBarangSearchInlineWidget,
}) => {
  const [query, setQuery] = useState({ kodeBarang: "", namaBarang: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((values) => ({ ...values, [name]: value }));
  };
};

export default BarangSearchInlineWidget;
