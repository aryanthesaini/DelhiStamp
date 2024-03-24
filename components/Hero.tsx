'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import logo from '../public/logo.png';
import Image from 'next/image';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Stamps', 'Badges'],
    loop: true,
    delaySpeed: 2000,
  });

  const [showModal, setShowModal] = useState(true);

  return showModal ? (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-[#FBEAEB]'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto justify-center object-cover'
        alt='logo'
        src={logo}
      />
      {/* <h1 className='text-sm md:text-md uppercase  pb-2 tracking-[12px]  px-4 font-light'>
        YOUNGUN
      </h1> */}

      <div className='z-20'>
        <h1
          className='text-xl md:text-3xl font-semibold uppercase  pb-5 tracking-[12px]  md:tracking-[15px] px-4 text-black
        '
        >
          {' '}
          Rohini<span className='text-[#2F3C7E]'>Stamps</span>
        </h1>
        <h2 className=' md:text-2xl  scroll-px-10  text-gray-500'>
          <span className='mr-3 mt-5'>
            Get custom <span className='text-[#2F3C7E]'>{text} </span>{' '}
          </span>
          <Cursor cursorColor='white' />
        </h2>

        <div className='pt-7 pb-5 px-10   scroll-px-10  text-gray-500'>
          <a
            href='#_'
            className='relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-blue-100 border border-gray-100 rounded-lg shadow-inner group'
            onClick={() => setShowModal(false)}
          >
            <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease'></span>
            <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease'></span>
            <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease'></span>
            <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease'></span>
            <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100'></span>
            <span className='relative transition-colors duration-300 delay-200 group-hover:text-white ease'>
              Click here to get in touch with us
            </span>
          </a>
        </div>

        {/* <div className='pt-7'>
          <Link href={'#about'}>
            <button className='heroButton'>About us</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Clients</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Team</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Reach Out</button>
          </Link>
        </div> */}
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center '>
      <div
        className='relative z-10'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <h3
                      className='text-base font-semibold leading-6 text-gray-900'
                      id='modal-title'
                    >
                      Call us @ +91 87663 34953
                    </h3>
                    <div className='mt-2'></div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='button'
                  className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto '
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
