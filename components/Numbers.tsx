'use client';

import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
type Props = {};

function Numbers({}: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:scroll-px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px]  text-gray-500 text-xl'>
        Our story in numbers
      </h3>
      <div className='w-[2000px] mt-[170px] xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp
          suffix='+'
          enableScrollSpy={true}
          redraw={true}
          end={40}
          scrollSpyDelay={2}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Clients
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929]  py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp enableScrollSpy={true} end={400} suffix='k+'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Orders Delivered
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500 '>
        <CountUp enableScrollSpy={true} end={5} suffix='+'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Years of consistency
        </h1>
      </div>
      <br />
      <div className='w-[2000px]  xl:h-[200px] md:p-10 xl:my-10 text-center bg-[#292929] py-4 font-light text-2xl xl:text-4xl text-red-500  '>
        <CountUp enableScrollSpy={true} end={100} suffix='%'>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h1 className='text-xl py-3 font-thin tracking-[2px] text-white'>
          Quality Assured
        </h1>
      </div>
    </div>
  );
}

export default Numbers;
