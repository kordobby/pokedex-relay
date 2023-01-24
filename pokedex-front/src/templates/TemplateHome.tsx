import { Poketmon } from "../types/BaseSchema";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from "styled-components";
import SearchBox from "../components/home/SearchBox";
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
      <ItemCardWrapper>
        {pokeList?.map((value, index) => {
          return (
            <ItemCard key={`pokeList-${value?.id}`} data={value}></ItemCard>
          );
        })}
      </ItemCardWrapper>
      <InView
        onChange={async (inView) => {
          if (inView) {
            await fetchMore();
          }
        }}
      >
        <Dimmed></Dimmed>
      </InView>
    </TemplateHomeWrapper>
  );
};

// const TemplateHome = (
//   { count, pokeList }: HomeInterface,
//   ref: ForwardedRef<HTMLDivElement>
// ) => {
//   return (
//     <TemplateHomeWrapper>
//       <SearchBox />
//       <ItemCardWrapper>
//         {pokeList?.map((value, index) => {
//           return (
//             <ItemCard key={`pokeList-${value?.id}`} data={value}></ItemCard>
//           );
//         })}
//       </ItemCardWrapper>
//       <Dimmed ref={ref}></Dimmed>
//     </TemplateHomeWrapper>
//   );
// };
const TemplateHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 50px;
`;

const Dimmed = styled.div`
  background-color: yellow;
  height: 100px;
`;
export default TemplateHome;
