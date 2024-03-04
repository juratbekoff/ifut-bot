import { FilterQueryType } from "@/types";
import { api } from "../configs";

class Match {
  fetchMatches = async (query: FilterQueryType, userTgId: number) => {
    const { page = 1, limit = 10, keyword = "" } = query;

    return await api.get(
      `/match?page=${page}&limit=${limit}&keyword=${keyword}&userTgId=${userTgId}`
    );
  };

  getMatchById = async (matchId: number, page: number, userTgId?: number) => {
    return await api.get(
      `/match/single?matchId=${matchId}&userTgId=${userTgId}&page=${page}&limit=10`
    );
  };
}

export const matchService = new Match();
