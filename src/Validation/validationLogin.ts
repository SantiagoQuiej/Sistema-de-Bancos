import { z } from "zod";

export const validationLogin = z.object({
  username: z.email({ message: "Correo invalido" }),
  password: z
    .string()
    .min(8, "Debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número"),
});
