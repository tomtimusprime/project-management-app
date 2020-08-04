import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Button } from "react-bootstrap";
import { Avatar, SideMenu, sideBarVariants } from './utils/utils'
import { useAnimation } from "framer-motion";
import { useAuth0 } from '@auth0/auth0-react'
import GuestImg from '../../../../assets/images/guest-avatar.jpg'
const Sidebar = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState('open');

  const controls = useAnimation();

  useEffect(() => {
    controls.start(isOpen)
  }, [isOpen, controls])



  return (
    <SideMenu variants={sideBarVariants} initial='closed' exit='closed' animate={controls}>
      <Row className='mx-0'>
        <Col className='px-0'>
          <Button
            onClick={() => { setIsOpen(isOpen === 'open' ? 'closed' : 'open') }}
            className='float-right pr-2 pt-2'>Toggle</Button>
        </Col>
      </Row>
      {isOpen === 'open' && (
        <>
          <Row>
            <Col className='px-0 d-flex justify-content-center' xs={12}>
              <Avatar src={isAuthenticated ? user.picture : GuestImg} />
            </Col>
          </Row>

          <Nav style={{ color: 'white' }} className='flex-column justify-content-center' as='ul'>
            <Nav.Item className='text-center py-2' href='#' as='li'>
              <Nav.Link>Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item className='text-center py-2' href='#' as='li'>
              <Nav.Link>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className='text-center py-2' href='#' as='li'>
              <Nav.Link>Issues</Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      )}
    </SideMenu>
  );
};

export default Sidebar;
