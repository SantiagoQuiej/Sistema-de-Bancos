import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDownToLine,
  ArrowRightLeft,
  ArrowUpRight,
  Save,
  Wallet,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/app/store";
const DashboardDate = () => {
  const navigate = useNavigate();
  const date = useSelector((state: RootState) => state.dashboardSlice.data);
  const route = [
    {
      name: "Deposito",
      icon: ArrowDownToLine,
      description: "Ingrese fondos a su cuenta",
      color: "bg-green-500",
      route: "/deposito",
    },
    {
      name: "Retiro",
      icon: ArrowUpRight,
      description: "Retiro de fondos en su cuenta",
      color: "bg-red-500",
      route: "/retiros",
    },
    {
      name: "Tranferencia",
      icon: ArrowRightLeft,
      description: "Tranferencia a otras cuentas",
      color: "bg-blue-600",
      route: "/tranferencia",
    },
  ];
  return (
    <>
      <div className="w-full h-fit ">
        <div className="font-bold text-2xl">Buenos dias, Lucas</div>
        <div className="text-muted-foreground">
          Aqui tienes un resumen de tu cuenta
        </div>
        <div>
          <Card className="py-4 text-white mt-4 mb-4 border w-full bg-blue-700">
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-white">Saldo de tu cuenta</span>
                <div
                  className={`flex size-8 items-center justify-center rounded-lg`}
                >
                  <Wallet className="size-4 text-white" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-6xl text-white  font-bold">
                  Q.{date.balance}
                </span>
              </div>
              <span className={`font-medium`}>Cuenta principal</span>
            </CardContent>
          </Card>
          <div className="flex flex-wrap justify-center gap-20 px-8">
            {date.info.map((item, index) => {
              return (
                <Card key={index + 1} className="py-4 mt-4 border-gray-40">
                  <CardContent className="flex gap-10 px-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Save className="text-blue-600" />
                      <span className="text-sm font-bold text-center">
                        {item.title}
                      </span>
                      <span className="text-sm text-muted-foreground ">
                        {item.total}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <p className="mt-5 font-bold text-xl text-center">Acciones Rapidas</p>
        <div className="flex flex-wrap justify-center gap-20 px-8">
          {route.map((item, index) => {
            return (
              <Card
                key={index + 1}
                onClick={() => navigate(item.route)}
                className="py-4 mt-4 border-gray-400
           hover:border-blue-400 
           hover:bg-blue-100
           hover:shadow-xl
           hover:-translate-y-1
           transition-all duration-200 ease-in-out
           transform cursor-pointer"
              >
                <CardContent className="flex flex-col gap-10 px-10">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <item.icon
                      size={30}
                      className={`text-white ${item.color} rounded-sm`}
                    />
                    <span className="text-sm font-bold">{item.name}</span>
                    <span className="text-sm text-muted-foreground ">
                      {item.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashboardDate;
