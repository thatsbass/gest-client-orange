import { z } from "zod";

const phoneNumberSchema = z.object({
  phone: z
    .string()
    .min(9, "Le numéro de téléphone doit contenir au moins 9 chiffres.")
    .max(15, "Le numéro de téléphone ne peut pas dépasser 15 chiffres.")
    .regex(
      /^\d+$/,
      "Le numéro de téléphone ne doit contenir que des chiffres.",
    ),
});

export { phoneNumberSchema };
