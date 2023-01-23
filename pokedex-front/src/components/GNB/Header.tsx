import styled from "styled-components";

const Header = () => {
  return <StHeader></StHeader>;
};

export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 120px;
  background-color: red;
  position: fixed;
  top: 0;
  z-index: 10;
`;
