/* eslint-disable @typescript-eslint/no-explicit-any */
export type TrStatus = "NEW" | "PAID" | "REJECTED";

export type TransactionType = {
  id: number;
  userTgId: number;
  amount: number;
  card_name: string;
  card_number: string;
  status: TrStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateTransactionType = {
  card_name: string;
  card_number?: any;
  amount: any;
};
