import styled from "styled-components";

const SubmitButton = () => {
  return <ButtonWrapper></ButtonWrapper>;
};

const Input = () => {
  return (
    <InputWrapper>
      <input></input>
      <SubmitButton />
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

const ButtonWrapper = styled.div`
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
