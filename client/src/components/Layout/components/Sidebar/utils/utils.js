import styled from "styled-components";
import { motion } from 'framer-motion';

export const Avatar = styled.img`
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    margin: 0 auto 0 auto;
`

export const SideMenu = styled(motion.div)`
    width: 250px;
    flex-shrink: 0;
    height:calc(100vh - 56px);
    display: inline-flex;
    flex-direction: column;
    background-color: #323232;
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
        ease: 'linear'
      }
    }
  }