import { PredictionType, TransactionType } from ".";

export type UserType = {
  id: number;
  userTgId: number;
  name: string;
  surname?: string;
  username?: string;
  phone_number?: string;
  balance?: number;
  isBlockBot: boolean;
  createdAt: string;
  updatedAt: string;
  predictions: PredictionType[];
  transactions: TransactionType[];
};
