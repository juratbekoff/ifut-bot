import { ParticipantType } from ".";
import { MetaDataType } from "./meta";

export type MatchType = {
  id: number;
  adminId: number;
  homeClub: {
    id: number;
    name: string;
    logo: string;
    score: number | null;
  };
  awayClub: {
    id: number;
    name: string;
    logo: string;
    score: number | null;
  };
  date: string;
  scoreHome: number;
  scoreAway: number;
  status: "SCHEDULED" | "LIVE" | "FINISHED";
  createdAt: Date;
  updatedAt: Date;
  user?: {
    isUserPredicted: boolean;
    isWin: boolean;
    prediction: {
      homeClubScore: number;
      awayClubScore: number;
    };
  };
  participants: {
    meta: MetaDataType;
    list: ParticipantType[];
  };
};

export type FetchMatchesType = {
  meta: {
    currentPage: number;
    limit: number;
    total_pages: number;
    totalMatches: number;
  };
  matches: MatchType[];
};
