import { z } from "zod";

export const validacionDeposito = z.object({
  amount: z
    .string()
    .min(1, "El monto es obligatorio")
    .refine((val) => Number(val) > 0, {
      message: "El monto debe ser mayor a 0",
    }),

  method: z.string().min(1, "Debes seleccionar un método"),

  reason: z.string().min(10, "El motivo debe tener al menos 10 caracteres"),
});
