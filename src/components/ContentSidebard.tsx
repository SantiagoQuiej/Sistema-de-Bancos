import { ArrowUpRight, CircleUser, CloudBackup, History } from "lucide-react";
import { NavLink } from "react-router-dom";

const ContentSidebard = () => {
  const links = [
    {
      ruta: "/cuentas",
      icon: CircleUser,
      name: "Cuentas",
    },
    {
      ruta: "/tranferencia",
      icon: CloudBackup,
      name: "Tranferencia",
    },
    {
      ruta: "/retiros",
      icon: ArrowUpRight,
      name: "Retiros",
    },
    {
      name: "Historial de Entradas",
      ruta: "/historial-entradas",
      icon: History,
    },
    {
      ruta: "/historial de salida",
      icon: History,
      name: "Historial de salida",
    },
  ];
  return (
    <>
      <nav className="flex flex-col gap-y-3 text-md ml-4">
        <p className="text-gray-100 font-normal text-sm dark:text-gray-400">
          General
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex p-2 rounded-xl bg-gray-500 dark:bg-white/10 text-blue-400 dark:text-slate-500"
              : "flex p-2 hover:bg-gray-100 rounded-xl transition ease-in dark:hover:bg-white/10"
          }
        >
          <span className="ml-2">Dashboard</span>
        </NavLink>

        <p className="text-gray-100 font-normal text-sm mt-7 dark:text-gray-400">
          Gestión
        </p>
        {links.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.ruta}
              className={({ isActive }) =>
                isActive
                  ? "flex p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-blue-700 dark:text-slate-500"
                  : "flex p-2 hover:bg-gray-400 rounded-xl transition ease-in dark:hover:bg-white/10"
              }
            >
              <item.icon size={20} />
              <span className="ml-2">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default ContentSidebard;
