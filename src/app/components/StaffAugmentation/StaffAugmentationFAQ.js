'use client';
import React, { useState } from 'react';
import FAQAccordion from '../Common/FAQAccordion';
import '../../styles/Services.scss';

const StaffAugmentationFAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: '1. What is an IT staff augmentation?',
      answer:
        'TIT staff augmentation is the practice of supplementing your existing IT team with temporary or permanent IT professionals. This can help you address specific skill gaps, manage workload fluctuations, and complete projects on time and within budget. By leveraging IT staff augmentation, your business can gain access to a wider talent pool, improve operational efficiency, and achieve your IT goals more effectively.',
    },
    {
      question: '2. What are the costs associated with IT staff augmentation?',
      answer:
        'The cost of IT staff augmentation will vary depending on the experience level of the professionals you need, the duration of the engagement, and your location.',
    },
    {
      question:
        '3. What IT staff augmentation models and pricing options do you offer?',
      answer: `We understand the importance of flexibility. That's why we offer three different IT staff augmentation models to fit your project needs and budget: Dedicated Developer (monthly basis), Hourly Basis (pay-as-you-go), and Time and Material (T&M) Model (transparent cost estimation).`,
    },
  ];

  return (
    <div className='px-[70px] faq-bottom md:!mb-[5rem] !mb-8 pt-0'>
      <div className='solutions md:text-center text-left'>
        <h2 className='uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:py-10 pb-8'>
          FAQs
        </h2>
      </div>
      <div className='reveal'>
        <div itemScope='true' itemType='https://schema.org/FAQPage'>
          {faqs.map(({ question, answer }, index) => (
            <FAQAccordion
              key={index + 1}
              id={index + 1}
              question={question}
              answer={answer}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationFAQ;
