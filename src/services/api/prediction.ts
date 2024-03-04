import { CreatePredictionType } from "@/types";
import { api } from "../configs";

class Prediction {
  createPrediction = async (data: CreatePredictionType, userTgId?: number) => {
    return await api.post(`/prediction`, { userTgId, ...data });
  };
}

export const predictionService = new Prediction();
