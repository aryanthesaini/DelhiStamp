import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function TeamMembers({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden '>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://4.imimg.com/data4/AT/FC/MY-2406007/rubber-stamp.jpg'
        alt='Product image'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>PRODUCT NAME</h4>
        <p className='font-bold text-xl mt-1 py-2'>Genre</p>

        <ul className='list-disc space-y-4 ml-5 text-lg font-thin'>
          <li>Info</li>
          <li>Rate in ruppees</li>
          <li>avaliablity</li>
        </ul>
      </div>
    </article>
  );
}

export default TeamMembers;
