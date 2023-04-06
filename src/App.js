import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import BarangListPage from "./pages/barang/BarangListPage";
import BarangAddPage from "./pages/barang/BarangAddPage";
import BarangEditPage from "./pages/barang/BarangEditPage";
import PemasokListPage from "./pages/pemasok/PemasokListPage";
import PemasokAddPage from "./pages/pemasok/PemasokAddPage";
import PemasokEditPage from "./pages/pemasok/PemasokEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/barang" element={<BarangListPage />} />
        <Route path="/barang/add" element={<BarangAddPage />} />
        <Route path="/barang/edit/:kodeBarang" element={<BarangEditPage />} />
        <Route path="/pemasok" element={<PemasokListPage />} />
        <Route path="/pemasok/add" element={<PemasokAddPage />} />
        <Route
          path="/pemasok/edit/:kodePemasok"
          element={<PemasokEditPage />}
        />
        {/* <Route path="/" element={<ContainerOutletWidget />}>
          <Route index element={<LoginPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/pos/print" element={<POSPrintPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

