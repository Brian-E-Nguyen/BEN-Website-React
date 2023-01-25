// import { motion } from 'framer-motion/dist/framer-motion';

import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;