import styled from "styled-components";
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
  width: 500px;
  height: 500px;
  background-color: yellow;
  padding: 50px;
  box-sizing: border-box;
  img {
    width: 200px;
    height: 200px;
  }
`;
