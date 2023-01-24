import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { FC, ReactNode } from "react";

interface GNBInterface {
  children: ReactNode;
}

const GNB: FC<GNBInterface> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Footer />
      {children}
    </Layout>
  );
};

export default GNB;

const Layout = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: #eee;
`;
