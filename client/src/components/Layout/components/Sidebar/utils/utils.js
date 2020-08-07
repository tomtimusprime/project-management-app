import styled from "styled-components";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
export const Avatar = styled.img`
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    margin: 0 auto 0 auto;
`

export const Divider = styled.div`
  width: 100%;
  margin: 1rem auto 1rem auto;
  border-bottom: 1px solid #000;
`

export const SideMenu = styled(motion.div)`
    width: 250px;
    flex-shrink: 0;
    height:calc(100vh - 56px);
    display: inline-flex;
    flex-direction: column;
    background-color: var(--dark-grey-main);
    position: relative;
    border-right: 10px solid var(--light-grey-sec)
  `;

export const sideBarVariants = {
  open: {
    width: '250px',
    transition: {
      duration: .3,
      ease: 'linear'
    }
  },
  closed: {
    width: '50px',
    transition: {
      duration: .3,
      ease: 'linear',
      delay: .3
    }
  }
}

export const childDivVariants = {
  closed: {
    opacity: 0,
    padding: '0',
    x: -100, 
  },
  open: {
    opacity: 1,
    padding: '2rem',
    x: 0,
    transition: { duration: .3, delay: .3 }
  }
}

export const CustLink = styled(Link)`
  color: var(--light-grey-main);

  &:hover {
    color var(--light-grey-secc)
  }
`