/* eslint-disable react-hooks/rules-of-hooks */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { FilterQueryType } from "@/types";
import { matchService } from "@/services/api";
import { MetaDataType } from "@/types/meta";

export const useFetchMatches = (query: FilterQueryType, userTgId: number) => {
  return useQuery({
    queryKey: [queryKeys.FETCH_MATCHES],
    queryFn: () => {
      return matchService.fetchMatches(query, userTgId);
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetMatchById = (matchId: number, userTgId?: number) => {
  return useInfiniteQuery({
    queryKey: [queryKeys.GET_MATCH_BY_ID],
    queryFn: (item) =>
      matchService.getMatchById(matchId, item.pageParam, userTgId),
    initialPageParam: 1,
    getNextPageParam: (match) => {
      const metaData: MetaDataType = match?.data.match.participants.meta;
      return metaData.currentPage < metaData.total_pages
        ? metaData.currentPage + 1
        : undefined;
    },
  });
};
