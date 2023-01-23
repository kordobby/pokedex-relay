import { PokeTypes } from "../types/EnumPokeTypes";

export const convertTypeColors = (type: PokeTypes) => {
  const mapper = {
    ["노말"]: "purple",
    ["불꽃"]: "red",
    ["물"]: "blue",
    ["풀"]: "green",
    ["전기"]: "yellow",
    ["얼음"]: "aliceblue",
    ["격투"]: "gray",
    ["독"]: "purple",
    ["땅"]: "brown",
    ["비행"]: "blue",
    ["에스퍼"]: "pink",
    ["벌레"]: "lime",
    ["바위"]: "gray",
    ["고스트"]: "purple",
    ["드래곤"]: "blue",
    ["악"]: "black",
    ["강철"]: "orange",
    ["페어리"]: "pink",
  } as { [key in PokeTypes]: string };

  const color = mapper?.[type];
  return color;
};
