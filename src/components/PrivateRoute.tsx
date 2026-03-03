import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loginstate = localStorage.getItem("login");

  return loginstate ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
