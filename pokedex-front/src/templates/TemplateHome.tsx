import { FC } from "react";
import { Poketmon } from "../types/BaseSchema";
import ItemCard from "../components/home/ItemCard";
import styled from "styled-components";

interface HomeInterface {
  count: number;
  pokeList: Poketmon[];
}

const TemplateHome: FC<HomeInterface> = ({ count, pokeList }) => {
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
`;
export default TemplateHome;
