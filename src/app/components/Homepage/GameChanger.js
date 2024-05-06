'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const GameChanger = () => {
  const isMobile = useMediaQuery({ maxWidth: 414 });

  return (
    <div className='relative'>
      <div className='home_sec1_img'>
        <Image
          className='w-full h-auto'
          src={`https://a.storyblok.com/f/219851/1920x1000/8028e1d772/banner.jpg`}
          alt='homepage banner'
          width={isMobile ? 550 : 1920}
          height={isMobile ? 283 : 1000}
          priority={true}
          sizes='100vw'
        />
      </div>
      <div className='sec1_txt_position text-center !top-[38%]'>
        <div className='home_txt1'>
          <p className='!text-6xl font-semibold'>
            Providing Nextgen Technology Solutions <br />
            for your next leap
          </p>
        </div>
        <div className='flex justify-center w-full mt-10'>
          <Link href='/contact-us/' className='!w-fit'>
            <div className='header_sec1_txt2 hidden-xs'>
              <p className='transition uppercase'>Free Consultants</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='home_txt3 home_txt3_top_padding md:max-w-[825px] absolute bottom-[10%] left-5'>
        <h1 className='!text-2xl'>
          Product Engineering | Cloud | AI | Low-code No-code | Data
        </h1>
      </div>
    </div>
  );
};

export default GameChanger;
