/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { CreateTransactionType } from "@/types";
import { transactionService } from "@/services/api";
import { queryClient } from "@/main";
import { customToast } from "@/lib/utils";

export const useCreateTransaction = () => {
  return useMutation({
    mutationKey: [queryKeys.CREATE_TRANSACTION],
    mutationFn: (data: CreateTransactionType) => {
      return transactionService.create(data);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.GET_USER_INFO],
      });
      customToast("SUCCESS", "So'rov yuborildi, kuting...");
    },
    onError(error: any) {
      console.log(error);
      customToast(
        "ERROR",
        error?.response?.data?.message ||
          "Xatolik yuz berdi, keyinroq urinib ko'ring!"
      );
    },
  });
};
