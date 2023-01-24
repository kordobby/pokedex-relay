import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <span>LEETRUE</span>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  span {
    color: white;
  }
`;
