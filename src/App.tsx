import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authLogin";
import DashBoard from "./pages/DashBoard";
import MainLayout from "./components/MainLayout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
