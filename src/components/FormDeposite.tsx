import { ArrowDownToLine, Clock3, ShieldCheck, Zap } from "lucide-react";
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
// import type { validationLogin } from "@/Validation/validationLogin";

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

  const sendData = (date: z.infer<typeof validacionDeposito>) => {
    console.log(date);
  };
  return (
    <>
      <div className="w-full h-fit">
        <Card className="py-4 text-white mt-4 mb-4 border w-full bg-linear-to-r from-blue-700 via-blue-600 to-blue-800">
          <CardContent className="flex justify-between gap-3 flex-wrap mt-5 mb-5">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <div className="rounded-xl  bg-blue-500/40 h-fit mt-2 p-1.5">
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
            <div className=" flex flex-col items-end h-fit p-2 bg-blue-500/35 rounded-lg">
              <span className="font-bold text-white/80">Saldo Pricial</span>
              <h1 className="text-xl font-bold">
                Q.{info.balance}346346345235
              </h1>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between flex-wrap">
          <div className={cn("flex flex-col gap-6 w-70 sm:w-100 md:w-150")}>
            <Card>
              <CardHeader className="flex text-center">
                <div className="rounded-xl text-white bg-green-500 h-fit mt-2 p-1">
                  <ArrowDownToLine size={30} />
                </div>
                <div>
                  <CardTitle className="text-xl text-start">
                    Nuevo Deposito
                  </CardTitle>
                  <span className="text-muted-foreground text-start text-sm">
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
                          <div>
                            <FormLabel className="mb-3">Monto</FormLabel>
                            <div>
                              <FormControl>
                                <Input placeholder="Q 0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </div>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="method"
                      render={({ field }) => (
                        <FormItem>
                          <div>
                            <FormLabel className="mb-3">Metodo</FormLabel>
                            <div>
                              <FormControl>
                                <Input placeholder="Q 0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </div>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <div>
                            <FormLabel className="mb-3">Motivo</FormLabel>
                            <div>
                              <FormControl>
                                <Input placeholder="Q 0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </div>
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Ingresar
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div>asdfsdf</div>
        </div>
      </div>
    </>
  );
};

export default FormDeposite;
