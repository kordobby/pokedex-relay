import { Poketmon } from "../types/BaseSchema";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
interface HomeInterface {
  // itemRef: RefObject<HTMLDivElement>;
  count: number;
  pokeList: Poketmon[];
  fetchMore: () => void;
}

const TemplateHome = ({ count, pokeList, fetchMore }: HomeInterface) => {
  return (
    <TemplateHomeWrapper>
      <div className="container">
        {pokeList?.map((value, index) => {
          return (
            <ItemCard key={`pokeList-${value?.id}`} data={value}></ItemCard>
          );
        })}
      </div>
      <InView
        onChange={async (inView) => {
          if (inView) {
            await fetchMore();
          }
        }}
      >
        <Dimmed />
      </InView>
    </TemplateHomeWrapper>
  );
};

const TemplateHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 50px;
  }
`;

const ItemCardWrapper = styled.div``;

const Dimmed = styled.div`
  background-color: yellow;
  height: 100px;
`;
export default TemplateHome;
