import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
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

