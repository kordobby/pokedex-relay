import styled from "styled-components";
import { colors } from "../utils/utilColors";
// 아무짓도안햇어요
export const TemplateDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .tag_wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
`;

export const PokeCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${colors.grayscale01};
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  img {
    width: 200px;
    height: 200px;
  }
`;
