import React from 'react'
import {motion} from 'framer-motion';



const CardAnimation = ({children, delay}) => {

  const cardVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, type: "spring", damping: 9, delay: delay *.3 },
    },
    closed: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.div variants={cardVariants} initial='closed' animate='open'>
      {children}
    </motion.div>
  )
}

export default CardAnimation
