import { FC } from "react";
import styled, { css } from "styled-components";
import { sizeTypes } from "../../types/UI";

interface ImageProps {
  url: string;
}

const Image: FC<ImageProps> = ({ url }) => {
  return <ImageWrapper src={url} alt=""></ImageWrapper>;
};

export default Image;

const ImageWrapper = styled.img<{ size?: sizeTypes }>`
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
          height: 80px;
          width: 80px;
        `;
    }
  }}
`;
