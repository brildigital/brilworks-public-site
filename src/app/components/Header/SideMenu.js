import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import { Icon } from '../lib/commonFunction';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { menuItems } from '../lib/constants';
import MenuItem from './MenuItem';

const SideMenu = ({ open, close }) => {
  const pathname = usePathname();
  const [openSection, setOpenSection] = React.useState(0);

  const handleOpen = (value) => {
    if (value !== openSection) {
      setOpenSection(open === value ? 0 : value);
    } else {
      setOpenSection(0);
    }
  };

  const megaMenuNavList = (
    <ul className='pt-4 flex flex-col md:mb-0 md:mt-0 items-left'>
      {menuItems.map((menuItem, index) => (
        <li key={menuItem.name}>
          {!menuItem?.isMegaMenu ? (
            <div className='menu_txt1'>
              <MenuItem
                name={menuItem.name}
                path={menuItem.path}
                onClick={close}
              />
            </div>
          ) : (
            <Accordion
              open={openSection === index}
              icon={<Icon id={index} open={openSection} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className={`group/item accordion-title py-6 hover:!text-[#00b6cf] ${
                  openSection === index ? 'border-none' : ''
                }`}
              >
                <p className='group-hover/item:text-[#00dfb8]'>
                  {menuItem.name}
                </p>
              </AccordionHeader>
              <AccordionBody
                className={
                  openSection === index ? 'border-b border-gray-500' : ''
                }
              >
                {menuItem?.menuItems?.map((subMenu) => (
                  <div
                    key={subMenu.name}
                    className='menu_mob_flex mega-menu-content flex flex-col gap-3 !items-start'
                  >
                    <p>{subMenu.name}</p>
                    <div className='flex flex-col menu_mob_flex mega-menu-content !items-start gap-2'>
                      {subMenu.subSections.map((subMenuItem) => (
                        <MenuItem
                          key={subMenuItem.name}
                          name={subMenuItem.name}
                          path={subMenuItem.path}
                          onClick={close}
                          className='!text-3xl'
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Drawer
      open={open}
      placement='right'
      size={'100vw'}
      className='overflow-y-scroll z-[11] bg-white'
      onClose={close}
      transition={{
        duration: 1,
      }}
      overlayProps={{
        className: 'bg-transparent',
      }}
    >
      <IconButton
        variant='text'
        className='absolute right-10 top-8'
        ripple={false}
        onClick={close}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          className='h-10 w-10'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </IconButton>
      <div className='w-[88%] mx-auto md:pt-8 py-4'>
        <div className='flex md:flex-row flex-col md:gap-12 lg:gap-20 gap-8'>
          <div className='basis-3/5'>{megaMenuNavList}</div>
          <div className='basis-2/5'>
            <div className='header_img1 py-4 hidden-xs'>
              <Image
                src='/images/blog-2.webp'
                alt='fintech'
                width={491}
                height={276}
              />
            </div>
            <div className='header_img1'>
              <Image
                src='/images/blog-1.webp'
                alt='Healthcare'
                width={491}
                height={276}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
