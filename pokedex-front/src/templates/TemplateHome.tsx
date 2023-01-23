import { FC } from "react";
import { Poketmon } from "../types/BaseSchema";
import ItemCard from "../components/ItemCard/ItemCard";
import styled from "styled-components";

interface HomeInterface {
  count: number;
  pokeList: Poketmon[];
}

const TemplateHome: FC<HomeInterface> = ({ count, pokeList }) => {
  console.log(pokeList);
  return (
    <TemplateHomeWrapper>
      {pokeList?.map((value) => {
        return <ItemCard key={`pokeList-${value?.id}`} data={value}></ItemCard>;
      })}
    </TemplateHomeWrapper>
  );
};

const TemplateHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 50px;
`;
export default TemplateHome;
