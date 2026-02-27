import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authLogin";
import DashBoard from "./pages/DashBoard";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login SIN layout */}
        <Route path="/" element={<LoginPage />} />

        {/* Rutas protegidas con layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;