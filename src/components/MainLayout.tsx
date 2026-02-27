import { Outlet, useNavigate } from "react-router-dom";
import ContentSidebard from "./ContentSidebard";
import { SquareArrowRightExit } from "lucide-react";
import { useDispatch } from "react-redux";
import { setlogin } from "@/features/login/sliceLogin";

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem("login");
    dispatch(setlogin());
    navigate("/");
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-64 bg-slate-900 text-white p-4">
          <h1 className="text-xl font-bold mb-6">🏦 MiBanco</h1>
          <ContentSidebard />
        </aside>

        {/* CONTENIDO */}
        <div className="flex flex-col flex-1">
          {/* NAVBAR */}
          <nav className="bg-blue-900">
            <div className="w-full px-4 py-3 flex justify-between items-center">
              <div className="text-2xl font-medium text-white">
                Sistema de Banco
              </div>

              <div className="flex justify-center size-10 rounded-full hover:bg-white/20 cursor-pointer">
                <SquareArrowRightExit onClick={exit} className="text-white" />
              </div>
            </div>
          </nav>

          {/* MAIN SCROLLABLE */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
