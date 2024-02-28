'use client';

import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function About({}: Props) {
  return (
    <div className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl '>
        About us
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{ once: true }} //optional
        src='https://4.imimg.com/data4/AT/FC/MY-2406007/rubber-stamp.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]  md:rounded-lg '
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl '>
          Here is a{' '}
          <span className='text-red-500 text-xl md:text-2xl lg:text-3xl'>
            little
          </span>{' '}
          about us
        </h4>
        <p className='text-base md:text-2xl lg:text-3xl font-thin'>
          Discover the world of stamps at{' '}
          <span className='text-red-500 '> DelhiStamps</span> in Tri Nagar,
          Delhi. From rare finds to contemporary releases, we cater to
          collectors of all levels. Visit us at and explore the art of philately
          today!
        </p>
      </div>
    </div>
  );
}

export default About;
