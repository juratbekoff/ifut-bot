import { FilterQueryType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";

class Match {
  fetchMatches = async (query: FilterQueryType, userTgId: number) => {
    const { page = 1, limit = 10, keyword = "" } = query;

    return await api.get(
      `/match?page=${page}&limit=${limit}&keyword=${keyword}&userTgId=${userTgId}`
    );
  };

  getMatchById = async (matchId: number, page: number) => {
    return await api.get(
      `/match/single?matchId=${matchId}&userTgId=${WebApp.initDataUnsafe.user?.id}&page=${page}&limit=10`
    );
  };
}

export const matchService = new Match();
