import React from 'react';
import Svgs from '../Svgs';

const ServiceCard = ({ title, description }) => (
  <div className='service_detail_card_border p-[1px] rounded-lg'>
    <div className='flex flex-col gap-2 border border-transparent p-4 rounded-lg cursor-pointer bg-white'>
      <div className='text-2xl font-bold'>{title}</div>
      <p className='text-base'>{description}</p>
    </div>
  </div>
);

const WhyStaffAugmentation = () => {
  return (
    <div className='px-[70px] md:py-[6rem] py-[4rem] end-to-end'>
      <div className='endTO_text solutions'>
        <h2 className='!w-full p-0'>
          Why Brilworks For IT Staff Augmentation Service
        </h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-20 mt-16'>
        <div className='flex flex-col gap-20'>
          <ServiceCard
            title='Cost-effective'
            description='With our IT staff augmentation services, you gain access to the talent you need without the burden of overhead costs associated with traditional hiring processes.'
          />
          <ServiceCard
            title='Highly Skilled Developers'
            description='By choosing us, you gain access to a pool of highly skilled developers, software engineers, business analysts, Scrum Masters, and QA specialists.'
          />
          <ServiceCard
            title='Domain Expertise'
            description='Whether you operate in finance, healthcare, e-commerce, or any other sector, we have the expertise to support you.'
          />
        </div>
        <div className='m-auto why_staff_augmentation'>
          <Svgs name='staff-augmentation-service' />
        </div>
        <div className='flex flex-col gap-20'>
          <ServiceCard
            title='Seamless Staffing'
            description='We connect you with pre-vetted, highly skilled professionals who can seamlessly integrate into your existing team.'
          />
          <ServiceCard
            title='Flexibility and Scalability'
            description='Our staff augmentation services provide unmatched flexibility. Scale your IT team up or down seamlessly to meet your project requirements and evolving business needs.'
          />
          <ServiceCard
            title='Dedicated Support'
            description='Client satisfaction is our priority. We are committed to providing ongoing support and clear communication throughout your partnership with us'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyStaffAugmentation;
