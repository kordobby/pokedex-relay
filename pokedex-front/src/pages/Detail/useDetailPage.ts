import { useQuery } from "@apollo/client";
import { GET_POKE_DETAIL } from "../../graphql/quries";
import { useParams } from "react-router";

const useDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_POKE_DETAIL, {
    variables: {
      poketmonInput: {
        id: id,
      },
    },
  });

  console.log(data);
  return {};
};

export default useDetailPage;
