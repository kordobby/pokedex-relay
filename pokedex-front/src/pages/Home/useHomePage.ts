import { useQuery } from "@apollo/client";
import { PoketmonListResponse } from "../../types/BaseSchema";
import { GET_POKE_LIST } from "../../graphql/quries";
import { Poketmon } from "../../types/BaseSchema";

const useHomePage = () => {
  const { data, loading, error } = useQuery<{
    getPoketmonList: PoketmonListResponse;
  }>(GET_POKE_LIST, {
    variables: {
      poketmonListInput: {
        page: 1,
        perPage: 20,
      },
    },
    // fetchPolicy: "network-only",
  });

  const listCount = data?.getPoketmonList?.count;
  const pokeList = data?.getPoketmonList?.poketmonList as Poketmon[];

  return { listCount, pokeList, loading, error };
};

export default useHomePage;
