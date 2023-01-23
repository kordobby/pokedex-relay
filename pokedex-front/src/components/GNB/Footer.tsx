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
  height: 150px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  span {
    color: white;
  }
`;
