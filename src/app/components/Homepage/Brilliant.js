'use client';
import Link from 'next/link';
import { ActionNResultText } from './BigText';
import { useEffect } from 'react';
import { scrollEffect } from '../lib/commonFunction';

const Brilliant = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener('scroll', scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []);

  return (
    <div className='container mx-auto md:py-[128px] md:px-[0] py-[40px] px-[15px]'>
      <div className='md:text-center'>
        <ActionNResultText />
        <div className='home_sec2_txt3 home_sec2_txt3_style sm:py-[32px] py-[16px] md:w-[80%] md:mx-auto reveal'>
          <p className='homepage-text xl:text-[48px] lg:text-[32px] sm:text-[26px] text-[22px] font-light lg:!w-[94%] !w-full'>
            Welcome to Brilworks – a tech-first company with a passion to create
            great products for businesses around the world. We’re agile and
            transparent in our processes, take care of our customers like
            they’re part of the team, and we believe in giving back to the
            community around us.
          </p>
        </div>

        <Link
          href='/about-us/'
          className='flex items-center sm:justify-center justify-start gap-[20px] about_btn transition pt-[32px]'
        >
          <div className='about_txt'>
            <p className='change_link text-[21px]'>About Us</p>
          </div>
          <div className='aerrow relative'>
            <img
              decoding='async'
              loading='lazy'
              className='black_aerrow alignnone wp-image-28 size-full'
              src='/images/black_aerrow-1.png'
              alt='arrow'
              width='46'
              height='18'
            />
            <img
              decoding='async'
              loading='lazy'
              className='gradiant_aerrow alignnone wp-image-29 size-full'
              src='/images/arrow-gradiant.png'
              alt='arrow'
              width='46'
              height='18'
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Brilliant;
