export type PredictionType = {
  id: number;
  userTgId: number;
  matchId: number;
  scoreClubHome: number;
  scoreClubAway: number;
  isCorrect: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreatePredictionType = {
  // userTgId: number;
  matchId: number;
  scoreClubHome: number;
  scoreClubAway: number;
};
