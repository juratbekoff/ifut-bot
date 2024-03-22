/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
import { MatchCard } from "@/components";
import { ParticipantsTable } from "@/components/tables";
import { useGetMatchById } from "@/hooks/useMatch";
import { MatchType } from "@/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LuLoader2 } from "react-icons/lu";
import { useParams } from "react-router-dom";

const Match = () => {
  const { matchId } = useParams();

  const getMatchQuery = useGetMatchById(+matchId!);

  if (getMatchQuery.isError) {
    if (getMatchQuery.error.message === "Request failed with status code 404") {
      return (
        <h1 className="mt-32 text-center">Uchrashuv ma'lumotlari topilmadi!</h1>
      );
    }
  }

  const matchData: MatchType = {
    ...getMatchQuery.data?.pages.map((item) => item?.data)[0]?.match,
    participants: {
      meta: getMatchQuery.data?.pages.map((item) => item?.data)[0]?.match
        ?.participants.meta,
      list: getMatchQuery.data?.pages
        .map((item) => item?.data)
        ?.map((item) => item?.match?.participants?.list)
        .flat(),
    },
  };

  return getMatchQuery.isLoading ? (
    <div className="flex justify-center mt-24">
      <LuLoader2 className="animate-spin text-3xl text-purple-600" />
    </div>
  ) : (
    <div className="mt-4 flex flex-col gap-5">
      {/* Match details */}
      <div className="p-2 bg-white rounded-md pb-5 shadow-sm border">
        <MatchCard action="IN_MATCH" data={matchData} />
      </div>

      {matchData?.status !== "SCHEDULED" ? (
        matchData?.participants?.list?.length === 0 ? (
          <h1 className="text-sm text-center">Ishtirokchilar ro'yxati bo'sh</h1>
        ) : (
          <div className="bg-white p-4 rounded-md shadow-sm border min-h-[50vh] max-h-[80vh] participants flex flex-col">
            <div className="flex flex-col gap-1">
              <h1 className="text-primary font-semibold text-xl max-xl:text-base text-black text-opacity-70 font-medium text-center pb-2">
                Ishtirokchilar
              </h1>

              <hr className="max-xl:h-[1px] max-xl:block w-full  hidden" />
            </div>

            <ParticipantsTable data={matchData?.participants?.list} />

            <div
              className={` flex justify-center mt-3 ${
                !getMatchQuery.hasNextPage && "hidden"
              }`}
            >
              <div
                className={`flex justify-center items-center gap-1 border border-purple-500 rounded-lg px-3 py-[2px] ${
                  getMatchQuery.isFetchingNextPage && "opacity-70"
                }`}
              >
                <ReloadIcon
                  className={`text-purple-600 ${
                    getMatchQuery.isFetchingNextPage && "animate-spin"
                  }`}
                />
                <button
                  disabled={getMatchQuery.isFetchingNextPage}
                  className={`text-xs text-purple-600 font-medium`}
                  onClick={() => getMatchQuery.fetchNextPage()}
                >
                  Yuklash
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <h1 className="text-sm text-center px-5">
          O'yin boshlangandan so'ng ishtirokchilar ro'yxati shu yerda paydo
          bo'ladi!
        </h1>
      )}
    </div>
  );
};

export default Match;
