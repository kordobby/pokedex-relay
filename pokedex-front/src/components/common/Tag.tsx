import React from "react";
import styled, { css } from "styled-components";
import { sizeTypes } from "../../types/UI";

const Tag = () => {
  return <TagWrapper></TagWrapper>;
};
export default Tag;

const TagWrapper = styled.div<{ size?: sizeTypes }>`
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 30px;
          width: 30px;
        `;
      case "medium":
        return css`
          height: 20px;
          width: 20px;
        `;
      case "small":
        return css`
          height: 10px;
          width: 10px;
        `;
      default:
        return css`
          height: 10px;
          width: 10px;
        `;
    }
  }}
`;
