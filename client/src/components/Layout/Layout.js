import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
`;
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainDiv>
        <Sidebar />
        <div style={{ flexGrow: 1, backgroundColor: "#C4C4C4" }}>{children}</div>
      </MainDiv>
    </div>
  );
};

export default Layout;
