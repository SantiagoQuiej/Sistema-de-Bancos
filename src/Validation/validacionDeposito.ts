import { z } from "zod";

export const validacionDeposito = z.object({
  amount: z.string({ message: "Correo invalido" }),
  method: z.string({ message: "sdfa" }),
  reason: z.string({ message: "sdfa" }),
});
