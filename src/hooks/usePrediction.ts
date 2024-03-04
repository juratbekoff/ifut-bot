/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { customToast } from "@/lib/utils";
import { predictionService } from "@/services/api";
import { CreatePredictionType } from "@/types";

export const useCreatePrediction = () => {
  return useMutation({
    mutationKey: [queryKeys.CREATE_PREDICTION],
    mutationFn: (data: CreatePredictionType) => {
      return predictionService.createPrediction(data);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.GET_MATCH_BY_ID],
      });
      customToast("SUCCESS", "Taxmin qilindi!");
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
