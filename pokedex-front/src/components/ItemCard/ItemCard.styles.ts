import styled from "styled-components";
import { colors } from "../../utils/utilColors";

export const ItemCardWrapper = styled.div`
  width: 200px;
  height: 270px;
  border: 1px solid ${colors.grayscale02};
  border-radius: 15px;
  margin: 10px 0px;
  box-sizing: border-box;
  padding-top: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  img {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: 20px;
  }
  .tag_wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
`;
