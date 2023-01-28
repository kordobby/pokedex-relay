import React, { FC } from "react";
import styled, { css } from "styled-components";
import { sizeTypes } from "../../types/UI";

interface TagInterface {
  text: string;
  color?: string;
}

const Tag: FC<TagInterface> = ({ text, color }) => {
  return (
    <TagWrapper bgColor={color}>
      <span>{text}</span>
    </TagWrapper>
  );
};
export default Tag;

const TagWrapper = styled.div<{ size?: sizeTypes; bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor ?? "white"};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 3px;
  span {
    color: ${({ bgColor }) => (bgColor ? "white" : "black")};
  }

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
          height: 30px;
          width: 80px;
        `;
    }
  }}
`;
