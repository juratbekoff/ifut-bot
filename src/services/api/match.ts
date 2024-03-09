import { FilterQueryType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";

const userTgId = WebApp.initDataUnsafe.user?.id;

class Match {
  fetchMatches = async (query: FilterQueryType) => {
    const { page = 1, limit = 10, keyword = "" } = query;

    return await api.get(
      `/match?page=${page}&limit=${limit}&keyword=${keyword}&userTgId=${userTgId}&usageBy=USER`
    );
  };

  getMatchById = async (matchId: number, page: number) => {
    return await api.get(
      `/match/single/user?matchId=${matchId}&userTgId=${userTgId}&page=${page}&limit=10`
    );
  };
}

export const matchService = new Match();
