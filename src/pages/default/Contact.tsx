import React from 'react';
import { Contact as ContactSection } from '../../sections/default/Contact';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
