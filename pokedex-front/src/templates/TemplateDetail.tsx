import { FC } from "react";
import Tag from "../components/common/Tag";
import { Poketmon } from "../types/BaseSchema";
import { PokeTypes } from "../types/EnumPokeTypes";
import { convertIndexNum } from "../utils/convertIndexNum";
import { convertPokeTypes } from "../utils/convertPokeTypes";
import { convertTypeColors } from "../utils/convertTypeColors";
import { TemplateDetailWrapper, PokeCard } from "./TemplateDetail.style";
import TypeTags from "../components/TypeTags";

interface TemplateDetailProps {
  data: Poketmon | undefined;
}

const TemplateDetail: FC<TemplateDetailProps> = ({ data }) => {
  const type = convertPokeTypes(data?.type);

  if (!data) return <></>;
  return (
    <TemplateDetailWrapper>
      <PokeCard>
        <p>{convertIndexNum(data?.num)}</p>
        <img src={data?.image} alt={data?.name} />
        <p>{data?.name}</p>
        <TypeTags pokeType={data?.type} />
        <p>{`${data?.attack} - ${data?.sAttack} - ${data?.defense} - ${data?.sDefense} - ${data?.health} - ${data?.speed}`}</p>
      </PokeCard>
    </TemplateDetailWrapper>
  );
};

export default TemplateDetail;
