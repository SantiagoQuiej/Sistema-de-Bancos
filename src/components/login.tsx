import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { validationLogin } from "@/Validation/validationLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [ispassword, setIsPassword] = useState<boolean>(true);
  const dates = [
    {
      name: "lucasquiej@gmail.com",
      password: "Realiximche123",
    },
  ];
  const form = useForm<z.infer<typeof validationLogin>>({
    resolver: zodResolver(validationLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const enviarDatos = (date: z.infer<typeof validationLogin>) => {
    if (date.username.endsWith("gmail.com")) {
      const filtro = dates.filter(
        (name) => name.name == date.username && name.password == date.password,
      );
      if (filtro.length != 0) {
        localStorage.setItem("login", JSON.stringify(date));
        toast.error("Iniciando Sesión...", {
          className: "!bg-blue-500 !text-white",
        });
        navigate("/dashboard");
      } else {
        toast.error("Correo o Contraseña invalidos", {
          className: "!bg-red-500 !text-white",
        });
      }
    } else {
      toast.error("Datos Invalidos", {
        className: "!bg-red-500 !text-white",
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" offset={10} />
      <div className={cn("flex flex-col gap-6 sm:w-110")}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-start">
              Iniciar Sesión
            </CardTitle>
            <span className="text-muted-foreground text-start text-sm">
              Ingrese sus credenciales
            </span>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(enviarDatos)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <div>
                        <FormLabel className="mb-3">
                          Correo Electrónico
                        </FormLabel>
                        <div>
                          <FormControl>
                            <Input
                              placeholder="admin@services.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div>
                        <FormLabel className="mb-3">Contraseña</FormLabel>
                        <div>
                          <FormControl>
                            <div className="relative">
                              <Input
                                type={`${ispassword ? "password" : "text"}`}
                                placeholder="Ingrese su contraseña"
                                {...field}
                              />
                              {ispassword ? (
                                <EyeOff
                                  size={18}
                                  onClick={() =>
                                    setIsPassword((previus) => !previus)
                                  }
                                  className="absolute right-2 bottom-2 cursor-pointer"
                                />
                              ) : (
                                <Eye
                                  size={18}
                                  onClick={() =>
                                    setIsPassword((previus) => !previus)
                                  }
                                  className="absolute right-2 bottom-2 cursor-pointer"
                                />
                              )}
                            </div>
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
            <Button type="submit" className="bg-red-600 mt-1 w-full">
              Crear cuenta
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default login;
