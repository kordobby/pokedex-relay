import { FC } from "react";
import styled from "styled-components";
import useSearchPoke from "../../hook/useSearchPoke";
import { memo } from "react";
interface SubmitButtonInterface {
  onSubmit: () => void;
}
const SubmitButton: FC<SubmitButtonInterface> = ({ onSubmit }) => {
  return <ButtonWrapper onClick={onSubmit}></ButtonWrapper>;
};

const Input = () => {
  const { onChangeHandler, onSubmit } = useSearchPoke();
  return (
    <InputWrapper>
      <input onChange={onChangeHandler}></input>
      <SubmitButton onSubmit={onSubmit} />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  background-color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 20px;
  border-radius: 50px;
  width: 300px;
  position: relative;
  input {
    border: none;
    outline: none;
    margin: 0;
    text-align: center;
  }
`;

const ButtonWrapper = styled.button`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 35px;
  color: white;
  position: absolute;
  right: 8px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
