import { FC } from "react";
import { Poketmon } from "../types/BaseSchema";
import { convertIndexNum } from "../utils/convertIndexNum";
import { TemplateDetailWrapper, PokeCard } from "./TemplateDetail.style";
import TypeTags from "../components/TypeTags";
import Image from "../components/common/Image";
import Tag from "../components/common/Tag";
import Table from "../components/common/Table";

interface TemplateDetailProps {
  data: Poketmon | undefined;
}

const TemplateDetail: FC<TemplateDetailProps> = ({ data }) => {
  if (!data) return <></>;

  const stats = [
    data?.attack,
    data?.sAttack,
    data?.defense,
    data?.sDefense,
    data?.health,
    data?.speed,
  ];

  return (
    <TemplateDetailWrapper>
      <PokeCard>
        <Tag text={convertIndexNum(data?.num)} />
        <Image url={data?.image} />
        <p>{data?.name}</p>
        <TypeTags pokeType={data?.type} />
        <Table data={stats} />
      </PokeCard>
    </TemplateDetailWrapper>
  );
};

export default TemplateDetail;
