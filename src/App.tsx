import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authLogin";
import DashBoard from "./pages/DashBoard";
import MainLayout from "./components/MainLayout";
import PrivateRoute from "./components/PrivateRoute";
import DepositoPage from "./pages/DepositoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/deposito" element={<DepositoPage />} />
            <Route path="/*" element={<h1>404 Page not Found</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
