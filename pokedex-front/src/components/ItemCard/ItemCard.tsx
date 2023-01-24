import { FC } from "react";
import { useNavigate } from "react-router";
import { Poketmon } from "../../types/BaseSchema";
import { convertPokeTypes } from "../../utils/convertPokeTypes";
import { ItemCardWrapper } from "./ItemCard.styles";
import Tag from "../common/Tag";
import { convertTypeColors } from "../../utils/convertTypeColors";
import { PokeTypes } from "../../types/EnumPokeTypes";
interface ItemCardInterface {
  data: Poketmon;
  // itemRef?: RefObject<HTMLDivElement>;
}

const ItemCard: FC<ItemCardInterface> = ({ data }) => {
  const navigate = useNavigate();
  const type = convertPokeTypes(data?.type);
  return (
    <>
      <ItemCardWrapper
        onClick={() => {
          navigate(`/pokemon/${data?.id}`);
        }}
      >
        <>
          <p>{data.id.toString().padStart(4, "0")}</p>
          <img src={data.image} />
          <p>{data.name}</p>
          <div className="tag_wrapper">
            {type?.map((value) => {
              return (
                <Tag
                  key={`poke-type-${value}`}
                  text={value}
                  color={convertTypeColors(value as PokeTypes)}
                ></Tag>
              );
            })}
          </div>
        </>
      </ItemCardWrapper>
    </>
  );
};

export default ItemCard;
