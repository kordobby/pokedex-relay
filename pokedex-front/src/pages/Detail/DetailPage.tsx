import useDetailPage from "./useDetailPage";
import TemplateDetail from "../../templates/TemplateDetail";
const DetailPage = () => {
  const { pokeData, loading, error } = useDetailPage();

  if (loading || error) return <></>;
  return (
    <>
      {pokeData?.name}
      <TemplateDetail data={pokeData}></TemplateDetail>
    </>
  );
};

export default DetailPage;
