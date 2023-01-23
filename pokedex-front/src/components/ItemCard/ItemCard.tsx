import { FC } from "react";
import { useNavigate } from "react-router";
import { Poketmon } from "../../types/BaseSchema";
import { convertPokeTypes } from "../../utils/convertPokeTypes";
import { ItemCardWrapper } from "./ItemCard.styles";

interface ItemCardInterface {
  data: Poketmon;
}

const ItemCard: FC<ItemCardInterface> = ({ data }) => {
  const navigate = useNavigate();
  const type = convertPokeTypes(data?.type);
  return (
    <ItemCardWrapper
      onClick={() => {
        navigate(`/pokemon/${data?.id}`);
      }}
    >
      <>
        <p>{data.name}</p>
        <img src={data.image} />
        {type?.map((value) => {
          return <p key={`poke-type-${value}`}>{value}</p>;
        })}
      </>
    </ItemCardWrapper>
  );
};

export default ItemCard;
