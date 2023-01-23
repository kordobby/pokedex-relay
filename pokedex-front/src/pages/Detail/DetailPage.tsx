import useDetailPage from "./useDetailPage";

const DetailPage = () => {
  const { pokeData, loading, error } = useDetailPage();
  console.log("::::::::::");

  if (loading || error) return <></>;
  return <>{pokeData?.name}</>;
};

export default DetailPage;
