import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles'; 
import { services } from '../constants' ;
import { fadeIn, textVariant } from '../utils/motion'  ;
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, source_code_link}) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-fulls p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          onClick={() => window.open(source_code_link, '_blank')}
          alt='web-development'
          className='w-22 h-22 object-contain'
        />

      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div>
      <h2 className={styles.sectionHeadText}>Introduction</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-8xl leading-[30px]'
      >
        I'm a new graduate with a degree in Math & Computer Science from McMaster University!
        I specialize in building statistical models from my research experience, web-development and software develeopment.
        Feel free to explore my work, check out my resume, or get in touch with me for any exciting opportunities!
      </motion.p>
      {/* {<div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>} */}
    </>
  )
}

export default SectionWrapper(About, 'about')