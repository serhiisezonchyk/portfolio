'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ link, isMobile = false }) => {
  const pathName = usePathname();
  return (
    <Link
      className={
        isMobile
          ? `flex w-full justify-center ${pathName === link.url && 'text-red-200'}`
          : `rounded p-1 ${pathName === link.url && 'bg-black text-white'}`
      }
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
