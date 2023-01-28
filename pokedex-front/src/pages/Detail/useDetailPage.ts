import { useQuery } from "@apollo/client";
import { GET_POKE_DETAIL } from "../../graphql/quries";
import { useParams } from "react-router";
import { Poketmon } from "../../types/BaseSchema";

const useDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<{ getPoketmon: Poketmon }>(
    GET_POKE_DETAIL,
    {
      variables: {
        poketmonInput: {
          id: Number(id),
        },
      },
    }
  );

  const pokeData = data?.getPoketmon;

  return { pokeData, loading, error };
};

export default useDetailPage;
