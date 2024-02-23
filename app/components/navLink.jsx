'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({ link, isMobile = false, onClick }) => {
  const pathName = usePathname();
  return (
    <Link
      className={
        isMobile
          ? `flex w-full justify-center ${pathName === link.url && 'text-red-200'}`
          : `rounded p-1 ${pathName === link.url && 'bg-black text-white'}`
      }
      href={link.url}
      onClick={onClick}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
