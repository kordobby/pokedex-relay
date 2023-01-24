import useHomePage from "./useHomePage";
import TemplateHome from "../../templates/TemplateHome";

const HomePage = () => {
  const { listCount, pokeList, loading, error, fetchMore, onLoadMore } =
    useHomePage();

  if (loading) return <></>;
  if (error) return <></>;
  return (
    <TemplateHome
      count={listCount ?? 0}
      pokeList={pokeList}
      fetchMore={onLoadMore}
    ></TemplateHome>
  );
};

export default HomePage;
