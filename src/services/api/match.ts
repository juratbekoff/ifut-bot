import { FilterQueryType } from "@/types";
import { api } from "../configs";

import WebApp from "@twa-dev/sdk";
const userTgId = WebApp.initDataUnsafe.user?.id;

// const userTgId = 791944079;

class Match {
  fetchMatches = async (query: FilterQueryType) => {
    const { page = 1, limit = 10, keyword = "" } = query;

    return await api.get(
      `/match?page=${page}&limit=${limit}&keyword=${keyword}&userTgId=${userTgId}&usageBy=USER`
    );
  };

  getMatchById = async (matchId: number, page: number) => {
    return await api.get(
      `/match/with-participants?matchId=${matchId}&userTgId=${userTgId}&page=${page}&limit=10`
    );
  };
}

export const matchService = new Match();
