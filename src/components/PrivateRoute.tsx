import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "@/app/store";

const PrivateRoute = () => {
  const { loginstate } = useSelector((state: RootState) => state.loginSlice);

  return loginstate ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
