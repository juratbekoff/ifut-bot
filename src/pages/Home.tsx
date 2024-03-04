/* eslint-disable react-hooks/exhaustive-deps */
import { useFetchMatches } from "@/hooks/useMatch";
import { MatchCard } from "../components";
import Input from "../components/ui-custom/input";
import { FetchMatchesType } from "@/types";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters as Loader } from "react-icons/ai";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  const fetchMatchQuery = useFetchMatches({
    page: 1,
    limit: 10,
    keyword,
  });

  useEffect(() => {
    fetchMatchQuery.refetch();
  }, [keyword]);

  const matchesList: FetchMatchesType = fetchMatchQuery.data?.data;

  return fetchMatchQuery.isLoading ? (
    <div className="flex flex-col items-center mt-20">
      <Loader className="animate-spin max-xl:text-2xl text-3xl text-purple-700 text-center" />
    </div>
  ) : (
    <div className="mt-5 max-xl:mt-3 grid max-xl:grid-cols-1 grid-cols-3 gap-5 max-xl:gap-3">
      <div className="xl:hidden">
        <Input onChange={setKeyword} />
      </div>

      {matchesList?.matches?.map((match) => (
        <MatchCard action="IN_LIST" key={match.id} data={match} />
      ))}
    </div>
  );
};

export default Home;
