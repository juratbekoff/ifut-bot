/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigate } from "react-router-dom";
import { Button, NumericInput } from "./ui-custom";
import { useState } from "react";
import { MatchType } from "@/types";
import { dateFormatter } from "@/lib/utils";
import { useCreatePrediction } from "@/hooks/usePrediction";

type MatchCardProps = {
  action?: "IN_LIST" | "IN_MATCH";
  data: MatchType;
};

const MatchCard = ({ action, data }: MatchCardProps) => {
  const [homeClubScore, setHomeClubScore] = useState(0);
  const [awayClubScore, setAwayClubScore] = useState(0);

  const navigate = useNavigate();
  const createPredictionMutation = useCreatePrediction();

  const onPredict = () => {
    createPredictionMutation.mutate({
      matchId: data.id,
      homeClubScore,
      awayClubScore,
    });
  };

  const onNavigate = () => {
    if (action === "IN_MATCH") return null;
    return navigate(`/match/${data?.id}`);
  };

  return (
    <div className="flex flex-col " onClick={onNavigate}>
      <div
        className={`bg-white w-full ${
          action === "IN_LIST"
            ? "border border-purple-500 border-opacity-20 hover:duration-300 hover:border-opacity-100 active:duration-300 active:border-opacity-100 active:border-2 rounded-md  shadow-sm"
            : ""
        }`}
      >
        <div
          className={`cursor-pointer p-6 grid grid-cols-3 gap-7 bg-white rounded-md gap-1 `}
        >
          {/* Club 1*/}
          <div className="flex flex-col items-center gap-1">
            <div>
              <img src={data?.homeClub?.logo} className="h-9" />
            </div>

            <h1 className="text-xs font-medium break-normal w-[150px] leading-3 text-center">
              {data?.homeClub?.name}
            </h1>

            <div
              className={`${
                action === "IN_MATCH" &&
                data?.status === "SCHEDULED" &&
                !data?.user?.isUserPredicted
                  ? "mt-4"
                  : "hidden"
              }`}
            >
              <NumericInput value={homeClubScore} setValue={setHomeClubScore} />
            </div>
          </div>

          {/* match status */}
          <div className="flex flex-col justify-center items-center">
            {data?.status === "SCHEDULED" ? (
              <Scheduled matchDate={data?.date} />
            ) : data?.status === "LIVE" ? (
              <LiveOrFinished
                scoreHome={data.homeClub?.score!}
                scoreAway={data.awayClub?.score!}
              />
            ) : data?.status === "FINISHED" ? (
              <LiveOrFinished
                isFinished
                scoreHome={data.homeClub?.score!}
                scoreAway={data.awayClub?.score!}
              />
            ) : null}
          </div>

          {/* Club 2 */}
          <div className="flex flex-col items-center gap-1">
            <div>
              <img src={data?.awayClub?.logo} className="h-9" />
            </div>

            <h1 className="text-xs font-medium break-normal w-[150px] leading-3 text-center">
              {data?.awayClub?.name}
            </h1>

            <div
              className={`${
                action === "IN_MATCH" &&
                data?.status === "SCHEDULED" &&
                !data?.user?.isUserPredicted
                  ? "mt-4"
                  : "hidden"
              }`}
            >
              <NumericInput value={awayClubScore} setValue={setAwayClubScore} />
            </div>
          </div>
        </div>

        {action === "IN_LIST" &&
          data?.user?.isUserPredicted &&
          data?.status !== "FINISHED" && (
            <div className="flex justify-center relative bottom-3">
              <span className="text-[11px] text-green-600 font-bold italic">
                Taxmin qilgansiz!
              </span>
            </div>
          )}

        {action === "IN_LIST" && data?.status === "FINISHED" && (
          <div className="flex justify-center relative bottom-6">
            <span className="text-xs text-red-600 font-bold italic">
              O'yin tugagan!
            </span>
          </div>
        )}
      </div>

      {action === "IN_MATCH" &&
        (data?.user?.isUserPredicted ? (
          <div className={`-mt-2 flex flex-col items-center text-xs`}>
            <span>
              Sizning taxmin:{" "}
              <b>
                ({data?.user?.prediction?.homeClubScore} -{" "}
                {data?.user?.prediction?.awayClubScore})
              </b>
            </span>

            {data?.status === "FINISHED" && (
              <span
                className={`font-bold mt-1 text-sm ${
                  data?.user?.isWin
                    ? "text-green-500 font-bold text-base"
                    : "text-red-500 font-bold text-base"
                }`}
              >
                {data?.user?.isWin
                  ? "Tabriklaymiz, siz g'olib bo'ldingiz!"
                  : "Afsuski, g'oliblik sizga nasib qilmadi!"}
              </span>
            )}
          </div>
        ) : (
          data?.status === "FINISHED" && (
            <div className="flex justify-center ">
              <span className="text-[11px] text-red-600 font-bold w-1/2 text-center italic">
                O'yin tugagan va unda siz qatnashmagansiz!
              </span>
            </div>
          )
        ))}

      <div
        className={`${
          action === "IN_MATCH" &&
          data?.status === "SCHEDULED" &&
          !data?.user?.isUserPredicted
            ? "flex justify-center -mt-2"
            : "hidden"
        }`}
      >
        <Button
          onClick={onPredict}
          isLoading={createPredictionMutation.isPending}
        >
          Taxmin qilish
        </Button>
      </div>
    </div>
  );
};

export default MatchCard;

// Mini functions
function LiveOrFinished({
  isFinished = false,
  scoreHome,
  scoreAway,
}: {
  isFinished?: boolean;
  scoreHome: number;
  scoreAway: number;
}) {
  return (
    <>
      <div className="flex gap-1 text-xl text-[#666666] font-bold">
        <span>{scoreHome || 0}</span>
        <span>:</span>
        <span>{scoreAway || 0}</span>
      </div>

      {!isFinished && (
        <div className="flex justify-center gap-[3px] text-red-600 text-[10px] -ml-1">
          <div className="flex items-center">
            <img src="/icons/live.svg" className="h-3 animate-pulse" />
          </div>
          <span className="font-bold">Live</span>
        </div>
      )}
    </>
  );
}

function Scheduled({ matchDate }: { matchDate: string }) {
  const { date, time } = dateFormatter(matchDate);

  return (
    <div className="font-bold flex flex-col items-center">
      <h1 className="text-amber-600 text-xs">{date}</h1>
      <span className="text-[#666666] text-[11px]">{time}</span>
    </div>
  );
}
