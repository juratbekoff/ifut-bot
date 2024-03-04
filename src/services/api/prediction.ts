import { CreatePredictionType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";
const userTgId = WebApp.initDataUnsafe.user?.id;

class Prediction {
  createPrediction = async (data: CreatePredictionType) => {
    return await api.post(`/prediction`, { userTgId, ...data });
  };
}

export const predictionService = new Prediction();
