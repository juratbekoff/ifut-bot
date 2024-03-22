import { CreateTransactionType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";
const userTgId = WebApp.initDataUnsafe.user?.id;

// const userTgId = 791944079;

class Transaction {
  create = async (data: CreateTransactionType) => {
    data.card_number = +data.card_number;

    return await api.post(`/transaction`, { userTgId, ...data });
  };
}

export const transactionService = new Transaction();
