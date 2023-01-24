import styled from "styled-components";
import SearchBox from "../home/SearchBox";

const Header = () => {
  return (
    <StHeader>
      <SearchBox />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 180px;
  background-color: red;
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: flex-end;
`;
