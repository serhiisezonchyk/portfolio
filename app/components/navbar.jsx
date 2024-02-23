'use client';
import NavLink from '@/components/navLink';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { contactLinks } from '../../utils/data';
const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vh',
    },
    opened: {
      x: '0 ',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariant = {
    closed: {
      x: '-10',
      opacity: 0,
    },
    opened: {
      x: '0 ',
      opacity: 1,
    },
  };
  return (
    <nav className="flex h-full items-center justify-between px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LARGE NAV */}
      <ul className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <li key={link.url}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          title="Go to main page"
          className="flex items-center justify-center gap-1 rounded-md bg-black p-1 font-sans text-sm md:font-semibold"
        >
          <span className="text-white">Serhii</span>
          <span className="sm-6 flex items-center rounded bg-white px-1 text-black md:h-8">Sezonchyk</span>
        </Link>
      </div>
      {/* LINKS */}
      <ul className="hidden w-1/3 justify-center gap-4 md:flex ">
        {contactLinks.map((link) => (
          <li key={link.url}>
            <Link
              className="flex items-center justify-center rounded-full bg-black p-2 transition-all duration-300 ease-in hover:scale-105"
              href={link.url}
              target="blank"
            >
              <link.ContactIcon className="text-white" />
            </Link>
          </li>
        ))}
      </ul>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU_BUTTON */}
        <button
          className="relative z-50 flex h-5 w-6 flex-col justify-between md:h-8 md:w-10"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-6 origin-left rounded bg-black md:w-10"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-6 rounded bg-black md:w-10"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-6 origin-left rounded bg-black md:w-10"
          ></motion.div>
        </button>
        {/* MENU_LIST */}
        {open && (
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.li variants={listItemVariant} className="flex w-full" key={link.url}>
                <NavLink link={link} isMobile={true} onClick={() => setOpen(false)} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
