import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
const Footer = () => {
    return (
        <Navbar style={{backgroundColor: 'var(--blue-main)', height: '56px'}} sticky='bottom'>
            <Nav />
        </Navbar>
    )
}

export default Footer
