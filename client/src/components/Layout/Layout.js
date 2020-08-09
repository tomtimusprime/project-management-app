import React from "react";
import Navbar from "./components/NavBar/NavBar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
          {children}
    </div>
  );
};

export default Layout;
