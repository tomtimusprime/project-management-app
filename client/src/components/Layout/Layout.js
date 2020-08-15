import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
     
    </div>
  );
};

export default Layout;
