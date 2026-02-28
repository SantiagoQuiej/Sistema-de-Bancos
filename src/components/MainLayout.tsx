import { Outlet, useNavigate } from "react-router-dom";
import ContentSidebard from "./ContentSidebard";
import { SquareArrowRightExit } from "lucide-react";
import { useDispatch } from "react-redux";
import { setlogin } from "@/features/login/sliceLogin";
import { useState } from "react";

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const exit = () => {
    localStorage.removeItem("login");
    dispatch(setlogin());
    navigate("/");
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <aside
          className={`
            fixed md:static top-0 left-0 h-full z-40
            ${isOpen ? "w-64" : "w-0 md:w-0"}
            bg-slate-900 text-white
            overflow-hidden overflow-y-auto
            transition-all duration-300
          `}
        >
          <div className="w-64 p-4">
            <h1 className="text-xl font-bold mb-6">🏦 MiBanco</h1>
            <ContentSidebard />
          </div>
        </aside>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 md:hidden z-30"
          />
        )}

        <div className="flex flex-col flex-wrap flex-1">
          <nav className="bg-blue-900">
            <div className="w-full px-4 py-3 flex justify-between items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl"
              >
                ☰
              </button>

              <div className="text-2xl font-medium text-white">
                Sistema de Banco
              </div>

              <div className="flex justify-center size-10 rounded-full hover:bg-white/20 cursor-pointer">
                <SquareArrowRightExit onClick={exit} className="text-white mt-2" />
              </div>
            </div>
          </nav>

          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;