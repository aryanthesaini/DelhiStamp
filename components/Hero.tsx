'use client';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import logo from '../public/logo.png';
import Image from 'next/image';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Stamps', 'logos', 'Billa'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
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
          className='text-xl md:text-3xl font-semibold uppercase  pb-5 tracking-[12px]  md:tracking-[15px] px-4
        '>
          {' '}
          Delhi<span className='text-red-400'>Stamps</span>
        </h1>
        <h2 className=' md:text-2xl  scroll-px-10  text-gray-500'>
          <span className='mr-3 mt-5'>
            Get custom <span className='text-red-400'>{text} </span>{' '}
          </span>
          <Cursor cursorColor='white' />
        </h2>

        {/* <div className='pt-7 pb-5 px-10   scroll-px-10  text-gray-500'>
          We are a humour-led creative agency that opens doors to the internet
          culture for brands Powered by meme marketing
        </div> */}

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
  );
}
