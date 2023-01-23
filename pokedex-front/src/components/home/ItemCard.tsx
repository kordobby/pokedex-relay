import { FC } from "react";
import { Poketmon } from "../../types/BaseSchema";
import { ItemCardWrapper } from "./ItemCard.styles";

interface ItemCardInterface {
  data: Poketmon;
}

const ItemCard: FC<ItemCardInterface> = ({ data }) => {
  return (
    <ItemCardWrapper>
      <p>{data.name}</p>
      <img src={data.image} />
    </ItemCardWrapper>
  );
};

export default ItemCard;
