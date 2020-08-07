import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Button } from "react-bootstrap";
import { Avatar, SideMenu, sideBarVariants, Divider, childDivVariants } from './utils/utils'
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useAuth0 } from '@auth0/auth0-react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import GuestImg from '../../../../assets/images/guest-avatar.jpg'
const Sidebar = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState('open');

  const controls = useAnimation();

  useEffect(() => {
    controls.start(isOpen)
  }, [isOpen, controls])

  return (
    <SideMenu variants={sideBarVariants} initial='open' exit='closed' animate={controls}>
      <Row className='mx-0'>
        <Col className='px-0'>
          <Button
            onClick={() => { setIsOpen(isOpen === 'open' ? 'closed' : 'open') }}
            className='float-right pr-2 pt-2'>Toggle</Button>
        </Col>
      </Row>
      {isOpen === 'open' && (
        <AnimatePresence>
          <motion.div
            variants={childDivVariants}
            initial='closed'
            exit='closed'
            animate='open'
          >
            <Row>
              <Col className='px-0 d-flex justify-content-center' xs={12}>
                <Avatar src={isAuthenticated ? user.picture : GuestImg} />
              </Col>
            </Row>
            <Row className='pt-2'>
              <Col>
                <h6>Hello,</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className='text-center'>User</h5>
              </Col>
            </Row>
            <Divider />
            <Nav style={{ color: 'white' }} className='flex-column justify-content-center' as='ul'>
              <Router>
                <Nav.Item className='text-center py-2' href='#' as='li'>
                  <Link to='/home'>Dashboard</Link>
                </Nav.Item>
                <Nav.Item className='text-center py-2' href='#' as='li'>
                  <Link to='/projects'>Projects</Link>
                </Nav.Item>
                <Nav.Item className='text-center py-2' href='#' as='li'>
                  <Link to=''>Issues</Link>
                </Nav.Item>
              </Router>
            </Nav>
            <Divider />
          </motion.div>
        </AnimatePresence>
      )}
    </SideMenu>
  );
};

export default Sidebar;
