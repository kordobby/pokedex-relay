import { useQuery } from "@apollo/client";
import { PoketmonListResponse } from "../../types/BaseSchema";
import { GET_POKE_LIST } from "../../graphql/quries";
import { Poketmon } from "../../types/BaseSchema";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
const useHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokeList, setPokeList] = useState<Poketmon[]>([]);
  const { data, loading, error, fetchMore } = useQuery<{
    getPoketmonList: PoketmonListResponse;
  }>(GET_POKE_LIST, {
    variables: {
      poketmonListInput: {
        page: 1, // total : 41page
        perPage: 30,
      },
    },
    fetchPolicy: "network-only",
    onCompleted(res) {
      const result = res?.getPoketmonList?.poketmonList as Poketmon[];
      setPokeList(result);
    },
  });

  const [getMorePoke] = useLazyQuery<{
    getPoketmonList: PoketmonListResponse;
  }>(GET_POKE_LIST, {
    variables: {
      poketmonListInput: {
        page: currentPage + 1,
        perPage: 20,
      },
    },
    fetchPolicy: "network-only",
    onCompleted(res) {
      const result = res?.getPoketmonList?.poketmonList as Poketmon[];
      setPokeList([...pokeList, ...result]);
    },
  });
  const listCount = data?.getPoketmonList?.count;

  const onLoadMore = () => {
    getMorePoke();
    setCurrentPage(currentPage + 1);
  };

  return { listCount, pokeList, loading, error, onLoadMore, fetchMore };
};

export default useHomePage;
