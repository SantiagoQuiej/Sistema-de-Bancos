import {
  ArrowDownToLine,
  Banknote,
  Clock3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";
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

const FormDeposite = () => {
  const info = useSelector((state: RootState) => state.dashboardSlice.data);

  const form = useForm<z.infer<typeof validacionDeposito>>({
    resolver: zodResolver(validacionDeposito),
    defaultValues: {
      amount: "",
      method: "",
      reason: "",
    },
  });

  const sendData = (data: z.infer<typeof validacionDeposito>) => {
    console.log(data);
  };

  return (
    <div className="w-full h-fit">
      {/* HEADER SUPERIOR */}
      <Card className="py-4 text-white mt-4 mb-4 border w-full bg-linear-to-r from-blue-700 via-blue-600 to-blue-800">
        <CardContent className="flex justify-between gap-3 flex-wrap mt-5 mb-5">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="rounded-xl bg-blue-500/40 h-fit mt-2 p-1.5">
                <ArrowDownToLine size={30} />
              </div>
              <div>
                <h1 className="text-white font-bold text-2xl">
                  Depositar Fondos
                </h1>
                <h1 className="text-white/80 font-medium">
                  Ingresa dinero a tu cuenta de forma segura
                </h1>
              </div>
            </div>

            <div className="flex gap-2 text-sm mt-6 flex-wrap">
              <span className="bg-blue-500/35 rounded-lg font-medium p-1.5 flex gap-0.5 items-center">
                <ShieldCheck size={15} />
                Transación Segura
              </span>
              <span className="bg-blue-500/35 rounded-lg font-medium p-1 flex gap-0.5 items-center">
                <Zap size={15} />
                Procesamiento Rapido
              </span>
              <span className="rounded-lg bg-blue-500/35 font-medium p-1 flex gap-0.5 items-center">
                <Clock3 size={15} />
                Disponible 24/7
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end h-fit p-2 bg-blue-500/35 rounded-lg">
            <span className="font-bold text-white/80">Saldo Pricial</span>
            <h1 className="text-xl font-bold">Q.{info.balance}</h1>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader className="flex gap-3 items-start">
              <div className="rounded-xl text-white bg-green-500 h-fit mt-1 p-1">
                <ArrowDownToLine size={30} />
              </div>
              <div>
                <CardTitle className="text-xl">Nuevo Deposito</CardTitle>
                <span className="text-muted-foreground text-sm">
                  Ingresa el monto y selecciona el metodo de deposito.
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
                                <p className="font-medium">
                                  Transferencia bancaria
                                </p>
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
                          <Input placeholder="Motivo del depósito" {...field} />
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
              <div className="text-3xl font-bold text-gray-900">Q. 12,000</div>
            </CardContent>
          </Card>
          <Card className="py-4 border w-ful">
            <CardContent className="flex flex-col gap-3">
              <span className="mt-2 text font-medium">Información</span>
              <ul className="list-disc p-4 text-muted-foreground marker:text-green-400">
                <li>Los depositos se reflejan en 1-2 dias habiles.</li>
                <li>Sin comision por transferencia bancaria.</li>
                <li>Monto minimo de deposito: $10.00</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormDeposite;
