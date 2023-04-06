import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import PemasokService from "../../services/PemasokService";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import Paginator from "../../widgets/commons/Paginator";
// TODO:
// import BarangSearchInlineWidget from "../../widgets/barang/BarangSearchInlineWidget";
import { useNavigate } from "react-router-dom";

const PemasokListPage = () => {
  const navigate = useNavigate();
  const [daftarPemasok, setDaftarPemasok] = useState([]);
  const [paginatePemasok, setPaginatePemasok] = useState({});
  const [queryPemasok, setQueryPemasok] = useState({ page: 1, limit: 10 });
};

export default PemasokListPage;
