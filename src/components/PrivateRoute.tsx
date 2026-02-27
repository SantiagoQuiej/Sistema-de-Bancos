import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "@/app/store";

const PrivateRoute = () => {
  const { login } = useSelector((state: RootState) => state.loginSlice);

  return login ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
