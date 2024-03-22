import * as z from "zod";

export const PaymentSchema = z.object({
  card_name: z
    .string({
      required_error: "Karta nomi kiritilishi shart!",
    })
    .min(1, "Karta nomi kiritilishi shart!"),
  card_number: z
    .any({
      required_error: "Karta raqam kiritilishi shart!",
    })
    .optional(),
  amount: z.coerce
    .number({
      required_error: "Summa kiritilishi shart!",
    })
    .min(1000, "Eng kamida 1000 so'm yechib olish mumkin!"),
});
