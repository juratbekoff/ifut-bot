import { CreatePredictionType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";
const userTgId = WebApp.initDataUnsafe.user?.id;

// const userTgId = 791944079;

class Prediction {
  createPrediction = async (data: CreatePredictionType) => {
    return await api.post(`/prediction`, { userTgId, ...data });
  };
}

export const predictionService = new Prediction();
