import { FilterQueryType } from "@/types";
import { api } from "../configs";

Telegram.WebApp.ready();

class Match {
  fetchMatches = async (query: FilterQueryType) => {
    const { page = 1, limit = 10, keyword = "" } = query;

    const testUserId = Telegram.WebApp.initDataUnsafe.user?.id;

    return await api.get(
      `/match?page=${page}&limit=${limit}&keyword=${keyword}&userTgId=${testUserId}`
    );
  };

  getMatchById = async (matchId: number, page: number) => {
    const testUserId = Telegram.WebApp.initDataUnsafe.user?.id;

    return await api.get(
      `/match/single?matchId=${matchId}&userTgId=${testUserId}&page=${page}&limit=10`
    );
  };
}

export const matchService = new Match();
