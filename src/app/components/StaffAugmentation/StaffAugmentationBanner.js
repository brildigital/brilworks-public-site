import React from 'react';

const StaffAugmentationBanner = () => {
  return (
    <div className='py-20 flex xl:flex-row  flex-col justify-between px-[70px] gap-20'>
      <div className='flex flex-col gap-10 xl:w-[754px]'>
        <h2 className='!text-[70px] !leading-[84px] break-words'>
          IT Staff Augmentation Service
        </h2>
        <p className='text-2xl text-[#504F4F]'>
          Access a global pool of experts for the niche skillset you need. Our
          IT Staff augmentation service offers a strategic solution to bridge
          the talent gap and incorporate immediate expertise into your team.
        </p>
        <button className='linear-gradient-background w-fit px-5 py-4'>
          Scale your team today
        </button>
      </div>
      <div className='grid md:grid-cols-2 gap-5 flex-none'>
        <div className='flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 '>
          <span className='text-[70px]'>8+</span>
          <p className='text-[29px] font-bold'>Years of Experience</p>
        </div>
        <div className='flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 '>
          <span className='text-[70px]'>100+</span>
          <p className='text-[29px] font-bold'>Experts</p>
        </div>
        <div className='flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 '>
          <span className='text-[70px]'>250+</span>
          <p className='text-[29px] font-bold'>Projects</p>
        </div>
        <div className='flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 '>
          <span className='text-[70px]'>98%</span>
          <p className='text-[29px] font-bold'>Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationBanner;
