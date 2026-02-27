import { Outlet, useNavigate } from "react-router-dom";
import ContentSidebard from "./ContentSidebard";
import { SquareArrowRightExit } from "lucide-react";

const MainLayout = () => {
  const navigate=useNavigate()
  const exit=()=>{
    localStorage.removeItem('login')
    navigate('/')

  }
  return (
    <>
      <div className="flex h-screen">
        <aside className="w-64 bg-slate-900 text-white p-4">
          <h1 className="text-xl font-bold mb-6">🏦 MiBanco</h1>
          <ContentSidebard />
        </aside>
        <div className="flex-1">
          <nav className="flex">
            <div className="w-full mx-auto px-4 py-3 flex justify-between items-center">
              <div className="text-2xl font-medium text-break">
                Sistema de <br className="flex sm:hidden" /> Banco
              </div>
              <div className="flex  absolute right-2 md:right-7">
                <div className="flex justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition duration-200 ease-in cursor-pointer">
                  <SquareArrowRightExit onClick={()=>exit()} className="mt-2" />
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1 p-6  overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
