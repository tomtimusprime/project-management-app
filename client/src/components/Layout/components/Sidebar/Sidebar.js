import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";
const Sidebar = ({ children }) => {
  const SideMenu = styled(motion.div)`
    width: 250px;
    flex-shrink: 0;
    height: 100vh;
    display: inline-flex;
    flex-direction: column;
    background-color: #323232;
  `;
  return (
    <SideMenu>
      <Row className='mx-0'>
        <Col className='px-0'>Hello</Col>
      </Row>
    </SideMenu>
  );
};

export default Sidebar;
