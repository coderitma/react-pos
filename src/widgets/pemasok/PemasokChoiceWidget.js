import { useEffect, useState } from "react";

const initQuery = { page: 1, limit: 7 };

const PemasokChoiceWidget = ({
  callbackPemasokChoiceWidget,
  onlyButton = true,
  dataInjection,
}) => {
  const [show, setShow] = useState(false);
  const [daftarPemasok, setDaftarPemasok] = useState([]);
  const [query, setQuery] = useState(initQuery);
  const [pemasokReview, setPemasokWidget] = useState({});

  useEffect(() => {
    if (show) handlePemasokServiceList();
  }, [show, query]);

  const handlePemasokServiceList = () => {};
};

export default PemasokChoiceWidget;
