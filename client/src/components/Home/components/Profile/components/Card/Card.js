import React from "react";
import { motion } from "framer-motion";
import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";
import {cardVariants} from './utils/utils'
const AnimatedCard = styled(motion.div)`
  height: 200px;
`;

const Card = ({ text, fieldOne, fieldTwo, custom }) => {
  
  const detailText = { ...text.details };

  return (
    <AnimatedCard initial={'closed'} variants={cardVariants} animate='open' className="card">
      <BsCard.Header>
        <BsCard.Title as="h2" className="text-center">
          {text.header}
        </BsCard.Title>
      </BsCard.Header>
      <BsCard.Body className="text-center">
        <p>
          <b>{detailText[0]}</b>: {fieldOne}
        </p>
        {detailText[1] && (
          <p>
            <b>{detailText[1]}</b>: {fieldTwo}
          </p>
        )}
      </BsCard.Body>
    </AnimatedCard>
  );
};

export default Card;
