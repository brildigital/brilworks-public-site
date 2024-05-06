import React from 'react';
import Svgs from '../Svgs';
import Link from 'next/link';

const serviceItems = [
  {
    title: 'React.js Developers',
    image: 'react-icon',
  },
  {
    title: 'Java Developers',
    image: 'java-icon',
  },
  {
    title: 'Node.js Developers',
    image: 'javascript-icon',
  },
  {
    title: 'React Native Developers',
    image: 'react-icon',
  },
  {
    title: 'AWS Developers',
    image: 'aws-icon',
  },
  {
    title: 'UI/UX Developer',
    image: 'ui-ux-icon',
  },
  {
    title: 'Blockchain Developer',
    image: 'blockchain-icon',
  },
  {
    title: 'Python Developers',
    image: 'python-icon',
  },
  {
    title: 'AI/ML Developer',
    image: 'cardiogram-icon',
  },
  {
    title: 'Project Manager',
    image: 'cardiogram-icon',
  },
  {
    title: 'DevOps Engineers',
    image: 'cardiogram-icon',
  },
  {
    title: 'QA & Test Automation Engineers',
    image: 'cardiogram-icon',
  },
];

const ServiceItem = ({ image, title }) => (
  <div className='flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white'>
    <Svgs name={image} />
    <p className='text-[29px] font-bold'>{title}</p>
  </div>
);

const UpskillStaffAugmentation = () => {
  return (
    <div className='md:py-[6rem] py-[4rem] end-to-end'>
      <div className='endTO_text solutions'>
        <h2 className='!w-full p-0'>
          Upskill Your Workforce with IT Staff <br />
          Augmentation Service
        </h2>
      </div>
      <div className='endTO_text_content home_sec2_txt4 mb-[5rem]'>
        <p className='!text-[1.2rem] !text-[#504F4F]'>
          With our tailored staff augmentation solutions, you can quickly fill
          skill gaps and tackle critical projects.
          <br />
          Our pre-vetted engineers seamlessly integrate with your existing team.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {serviceItems.map((item) => (
          <ServiceItem key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
      <div className='mt-20 flex w-full justify-center'>
        <Link
          href='/contact-us/'
          className='linear-gradient-background w-fit p-[2px]'
        >
          <button className='bg-white py-5 px-9 !text-base'>
            Schedule a Developer Interview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpskillStaffAugmentation;
