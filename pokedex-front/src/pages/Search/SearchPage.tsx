import useSearchPage from "./useSearchPage";

const SearchPage = () => {
  const { data, loading, error } = useSearchPage();

  console.log("rendering");
  if (loading || error) return <></>;
  const length = data?.getPoketmonList?.poketmonList?.length as number;
  if (length === 0) return <p>찾으신느 결과가 없습니다.</p>;
  return (
    <div>
      <p>{data?.getPoketmonList?.poketmonList[0]?.name}</p>
      <img src={data?.getPoketmonList?.poketmonList[0]?.image} alt="" />
    </div>
  );
};

export default SearchPage;
