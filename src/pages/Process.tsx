import React from 'react';
import { Process as ProcessSection } from '../sections/Process';
import { motion } from 'motion/react';

const Process: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <ProcessSection />
      
      {/* Additional Image Break for Process Page */}
      <section className="px-margin py-block-gap">
        <div className="w-full h-[600px] border-4 border-primary bg-secondary-container relative overflow-hidden">
          <img 
            alt="İnşaat süreci" 
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1__3rQKwIEpIesJAMV4UKKEby8z7jnrXJtdHga4mv7zcfRa-xGGfnOY8JSrTvieTSYH3_oFFrz5YCf28KzQOjsbM7IdZgnrDK5s3As2jhzbruUinKNwNBdSaoLKIiwr-JBtemRdkozrlMxe7QmsTX7OzkQ_Zw58YJk_AvoRoKeBUs7nn_MOAGoZXZkY75fKoX7C2Ofm51FUGEYbYaeOZgQQNEjqj_iA4cexm1hXJTs5Ppk1ACwVdjkG7Lm1NGugxVytCpgqwHVMU"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Process;
