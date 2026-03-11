import {
  ArrowUpToLine,
  Banknote,
  Book,
  ShieldCheck,
  TriangleAlert,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validacionDeposito } from "@/Validation/validacionDeposito";
import { cn } from "@/lib/utils";
import { addRetire } from "@/features/RetireHistori/SliceHistori";
import { useEffect, useState } from "react";
import { setRetire } from "@/features/dashboard/slicedashboard";

import { toast, Toaster } from "sonner";

const FormRetire = () => {
  const info = useSelector((state: RootState) => state.dashboardSlice.data);
  const [Info, setInfo] = useState({
    balance: 0,
  });
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm<z.infer<typeof validacionDeposito>>({
    resolver: zodResolver(validacionDeposito),
    defaultValues: {
      amount: "",
      method: "",
      reason: "",
    },
  });

  const sendData = (data: z.infer<typeof validacionDeposito>) => {
    if (info.balance >= 0 && Number(data.amount) <= info.balance) {
      dispatch(addRetire(data));
      dispatch(setRetire(Number(data.amount)));
      toast.error("Retiro exitoso", {
        className: "!bg-green-500 !text-white",
      });
    } else {
      toast.error("Saldo insuficiente", {
        className: "!bg-red-500 !text-white",
      });
    }
  };

  useEffect(() => {
    setInfo({ balance: info.balance });
  }, []);

  useEffect(() => {
    setInfo({
      balance: info.balance,
    });
  }, [info.balance]);

  useEffect(() => {
    form.reset();
  }, [info.balance]);
  return (
    <div className="w-full h-fit">
      <Toaster position="top-center" offset={10} />
      <Card className="py-4 mt-4 mb-4 border w-full bg-gray-200">
        <CardContent className="flex justify-between gap-3 flex-wrap mt-5 mb-5">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="rounded-xl bg-red-100 h-fit mt-2 p-1.5">
                <ArrowUpToLine className="text-red-600" size={30} />
              </div>
              <div>
                <h1 className="font-bold text-2xl">Retirar Fondos</h1>
                <h1 className="font-medium text-muted-foreground">
                  Retira dinero de tu cuenta de forma rapida
                </h1>
              </div>
            </div>

            <div className="flex gap-2 text-sm mt-6 flex-wrap">
              <span className="rounded-lg  p-1.5 flex gap-0.5 items-center">
                <ShieldCheck className="text-blue-400" size={15} />
                Transación Segura
              </span>
              <span className="rounded-lg p-1 flex gap-0.5 items-center">
                <TriangleAlert className="text-red-600" size={15} />
                Limite diario: $10,000
              </span>
              <span className="rounded-lg p-1 flex gap-0.5 items-center">
                <Book className="text-blue-500" size={15} />
                Multiples metodos
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end h-fit p-2  rounded-lg">
            <span className="font-bold ">Saldo Pricial</span>
            <h1 className="text-xl font-bold">Q.{Info.balance}</h1>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader className="flex gap-3 items-start">
              <div className="rounded-xl text-white bg-red-700 h-fit mt-1 p-1">
                <ArrowUpToLine size={30} />
              </div>
              <div>
                <CardTitle className="text-xl">Nuevo Retiro</CardTitle>
                <span className="text-muted-foreground text-sm">
                  Selecciona el monto y el metodo de retiro..
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(sendData)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monto</FormLabel>
                        <FormControl>
                          <Input placeholder="Q 0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="method"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Método</FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div
                            onClick={() => field.onChange("transferencia")}
                            className={cn(
                              "border rounded-xl p-4 cursor-pointer transition-all",
                              field.value === "transferencia"
                                ? "border-blue-600 bg-blue-50"
                                : "hover:border-blue-400",
                            )}
                          >
                            <div className="flex gap-3 items-center">
                              <ShieldCheck />
                              <div>
                                <p className="font-medium">Billetera Digital</p>
                                <p className="text-sm text-muted-foreground">
                                  1-2 días hábiles
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            onClick={() => field.onChange("efectivo")}
                            className={cn(
                              "border rounded-xl p-4 cursor-pointer transition-all",
                              field.value === "efectivo"
                                ? "border-blue-600 bg-blue-50"
                                : "hover:border-blue-400",
                            )}
                          >
                            <div className="flex gap-3 items-center">
                              <Zap />
                              <div>
                                <p className="font-medium">
                                  Efectivo en sucursal
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Inmediato
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Motivo</FormLabel>
                        <FormControl>
                          <Input placeholder="Motivo del retiro." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Continuar
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="border bg-white">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-6 items-center justify-center rounded-full bg-gray-100">
                  <Banknote className="size-5 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">Tu cuenta</span>
              </div>

              <span className="text-sm text-muted-foreground">
                Saldo Disponible
              </span>
              <div className="text-3xl font-bold text-gray-900">
                Q. {Info.balance}
              </div>
            </CardContent>
          </Card>
          <Card className="py-4 border w-ful">
            <CardContent className="flex flex-col gap-3">
              <span className="mt-2 text font-medium">Información</span>
              <ul className="list-disc p-4 text-muted-foreground marker:text-red-500">
                <li>Limite diario de retiro: $5,000.00</li>
                <li>Retiros en cajero: comision de $3.50</li>
                <li>Monto minimo de retiro: $3,000.00</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormRetire;
