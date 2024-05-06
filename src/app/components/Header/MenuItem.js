import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem = ({ path, onClick, name, className }) => {
  const pathname = usePathname();

  return (
    <Link href={path} onClick={onClick} className={className}>
      <p
        className={`!mb-0 w-full whitespace-nowrap ${
          pathname === path ? 'page-active' : 'hover:text-[#00dfb8]'
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

export default MenuItem;
