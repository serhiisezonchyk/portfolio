'use client';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import NavLink from '@/components/navLink';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  // { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const contactLinks = [
  { url: 'https://github.com/serhiisezonchyk', ContactIcon: GithubIcon },
  {
    url: 'https://www.linkedin.com/in/serhiisznch/',
    ContactIcon: LinkedinIcon,
  },
  {
    url: 'https://www.instagram.com/nxthing______/',
    ContactIcon: InstagramIcon,
  },
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
    <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LARGE NAV */}
      <ul className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <li key={link.url}>
            <NavLink link={link}/>
          </li>
        ))}
      </ul>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-sans md:font-semibold flex items-center justify-center gap-1'
        >
          <span className='text-white'>Serhii</span>
          <span className='sm-6 md:h-8 rounded bg-white text-black flex items-center px-1'>
            Sezonchyk
          </span>
        </Link>
      </div>
      {/* LINKS */}
      <ul className='hidden md:flex gap-4 w-1/3 justify-center '>
        {contactLinks.map((link) => (
          <li key={link.url}>
            <Link
              className='flex justify-center items-center bg-black p-2 rounded-full transition-all duration-300 ease-in hover:scale-105'
              href={link.url}
              target='blank'
            >
              <link.ContactIcon className='text-white' />
            </Link>
          </li>
        ))}
      </ul>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU_BUTTON */}
        <button
          className='w-6 md:w-10 h-5 md:h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-6 md:w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-6 md:w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-6 md:w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>
        {/* MENU_LIST */}
        {open && (
          <motion.ul
            variants={listVariants}
            initial='closed'
            animate='opened'
            className='absolute z-10 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-4xl'
          >
            {links.map((link) => (
              <motion.li
                variants={listItemVariant}
                className='w-full flex'
                key={link.url}
              >
                <NavLink link={link} isMobile={true}/>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
