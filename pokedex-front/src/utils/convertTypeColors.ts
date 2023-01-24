import { PokeTypes } from "../types/EnumPokeTypes";
import { colors } from "./utilColors";
export const convertTypeColors = (type: PokeTypes) => {
  const mapper = {
    ["노말"]: colors.mint01,
    ["불꽃"]: colors.orange01,
    ["물"]: colors.aqua01,
    ["풀"]: colors.green01,
    ["전기"]: colors.yellow02,
    ["얼음"]: colors.blue01,
    ["격투"]: colors.red01,
    ["독"]: colors.laverder02,
    ["땅"]: colors.orange02,
    ["비행"]: colors.blue02,
    ["에스퍼"]: colors.pink02,
    ["벌레"]: colors.green02,
    ["바위"]: colors.grayscale03,
    ["고스트"]: colors.lavender01,
    ["드래곤"]: colors.blue02,
    ["악"]: colors.grayscale06,
    ["강철"]: colors.grayscale05,
    ["페어리"]: colors.pink01,
  } as { [key in PokeTypes]: string };

  const color = mapper?.[type];
  return color;
};
