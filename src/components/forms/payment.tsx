import { PaymentSchema } from "@/lib/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input, MaskInput } from "../ui/input";
import { useCreateTransaction } from "@/hooks";

const PaymentForm = () => {
  const createTrMutation = useCreateTransaction();

  const form = useForm<z.infer<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
  });

  function onSubmit(values: z.infer<typeof PaymentSchema>) {
    values.card_number = values.card_number.split(" ").join("");

    createTrMutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 px-4"
      >
        {/* Card name */}
        <FormField
          control={form.control}
          name="card_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="karta nomi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Card number */}
        <FormField
          control={form.control}
          name="card_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MaskInput
                  mask="**** **** **** ****"
                  placeholder="karta raqam"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Amount */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="miqdorni kiriting"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          disabled={createTrMutation.isPending}
          className="p-2 bg-purple-500 text-white rounded-md text-xs self-center w-full disabled:bg-opacity-70"
        >
          So'rov yuborish
        </button>
      </form>
    </Form>
  );
};

export default PaymentForm;
