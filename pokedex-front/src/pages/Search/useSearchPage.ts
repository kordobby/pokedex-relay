import { GET_POKE_LIST } from "./../../graphql/quries";
import { PoketmonListResponse } from "./../../types/BaseSchema";
import QueryString from "qs";
import { useLocation } from "react-router";
import { useQuery } from "@apollo/client";

const useSearchPage = () => {
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { data, loading, error } = useQuery<{
    getPoketmonList: PoketmonListResponse;
  }>(GET_POKE_LIST, {
    variables: {
      poketmonListInput: {
        page: 1,
        perPage: 20,
        search: query.keyword,
      },
    },
  });
  return { data, loading, error };
};

export default useSearchPage;
