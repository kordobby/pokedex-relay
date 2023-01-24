import Input from "../common/Input";
import styled from "styled-components";

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Input></Input>
    </SearchBoxWrapper>
  );
};

export default SearchBox;

const SearchBoxWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #eeeeee;

  display: flex;
  align-items: center;
  justify-content: center;
`;
