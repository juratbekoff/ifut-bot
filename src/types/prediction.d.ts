export type PredictionType = {
  id: number;
  userTgId: number;
  matchId: number;
  homeClubScore: number;
  awayClubScore: number;
  isCorrect: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreatePredictionType = {
  // userTgId: number;
  matchId: number;
  homeClubScore: number;
  awayClubScore: number;
};
