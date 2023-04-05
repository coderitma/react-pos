import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import BarangListPage from "./pages/barang/BarangListPage";
import BarangAddPage from "./pages/barang/BarangAddPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/barang" element={<BarangListPage />} />
        <Route path="/barang/add" element={<BarangAddPage />} />
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

