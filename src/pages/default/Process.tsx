import React from 'react';
import { Process as ProcessSection } from '../../sections/default/Process';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

const Process: React.FC = () => {
  const { theme } = useTheme();
  const isModern = theme === 'alternative';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-16 ${isModern ? 'pt-24' : ''}`}
    >
      <ProcessSection />

      {/* Additional Image Break for Process Page */}
      <section className={`px-margin py-block-gap ${isModern ? 'py-block-gap-sm' : ''}`}>
        <div
          className={`w-full h-[600px] border-4 border-primary bg-secondary-container relative overflow-hidden ${isModern ? 'h-[400px] border-[3px] shadow-sm' : 'shadow-lg'}`}
        >
          <img
            alt="İnşaat süreci"
            className={`w-full h-full object-cover grayscale contrast-125 mix-blend-multiply ${isModern ? 'contrast-100' : ''}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1__3rQKwIEpIesJAMV4UKKEby8z7jnrXJtdHga4mv7zcfRa-xGGfnOY8JSrTvieTSYH3_oFFrz5YCf28KzQOjsbM7IdZgnrDK5s3As2jhzbruUinKNwNBdSaoLKIiwr-JBtemRdkozrlMxe7QmsTX7OzkQ_Zw58YJk_AvoRoKeBUs7nn_MOAGoZXZkY75fKoX7C2Ofm51FUGEYbYaeOZgQQNEjqj_iA4cexm1hXJTs5Ppk1ACwVdjkG7Lm1NGugxVytCpgqwHVMU"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Process;
