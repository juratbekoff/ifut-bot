import { CreatePredictionType } from "@/types";
import { api } from "../configs";

Telegram.WebApp.ready();

class Prediction {
  createPrediction = async (data: CreatePredictionType) => {
    const testUserId = Telegram.WebApp.initDataUnsafe.user?.id;

    return await api.post(`/prediction`, { userTgId: testUserId, ...data });
  };
}

export const predictionService = new Prediction();
