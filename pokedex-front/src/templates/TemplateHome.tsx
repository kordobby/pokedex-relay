import { FC } from "react";
import { Poketmon } from "../types/BaseSchema";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from "styled-components";
import SearchBox from "../components/home/SearchBox";

interface HomeInterface {
  count: number;
  pokeList: Poketmon[];
}

const TemplateHome: FC<HomeInterface> = ({ count, pokeList }) => {
  return (
    <TemplateHomeWrapper>
      <SearchBox />
      <ItemCardWrapper>
        {pokeList?.map((value) => {
          return (
            <ItemCard key={`pokeList-${value?.id}`} data={value}></ItemCard>
          );
        })}
      </ItemCardWrapper>
    </TemplateHomeWrapper>
  );
};

const TemplateHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 50px;
`;
export default TemplateHome;
