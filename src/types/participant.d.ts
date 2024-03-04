export type ParticipantType = {
  id: number;
  telegramId: number;
  name: string;
  surname?: string | null;
  username?: string | null;
  phone_number?: string | null;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  isCorrect: boolean;
  homeClubScore: number;
  awayClubScore: number;
};
