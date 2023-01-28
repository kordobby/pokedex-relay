import { FC, useMemo } from "react";
import styled from "styled-components";
import { PokeTypes } from "../types/EnumPokeTypes";
import { convertPokeTypes } from "../utils/convertPokeTypes";
import { convertTypeColors } from "../utils/convertTypeColors";
import Tag from "./common/Tag";

interface TypeTagsProps {
  pokeType: string;
}

const TypeTags: FC<TypeTagsProps> = ({ pokeType }) => {
  const type = convertPokeTypes(pokeType);
  const renderItem = useMemo(() => {
    const Tags = type?.map((value) => {
      return (
        <Tag
          key={`poke-type-${value}`}
          text={value}
          color={convertTypeColors(value as PokeTypes)}
        ></Tag>
      );
    });
    return Tags;
  }, [type]);

  return <TypeTagesWrapper>{renderItem}</TypeTagesWrapper>;
};

export default TypeTags;

const TypeTagesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
`;
