'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { contactLinks } from '../utils/data';
import Link from 'next/link';
export default function Home() {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <section className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-scroll '>
        {/* IMAGE-CONTAINER */}
        <div className='hidden sm:block sm:h-1/3 md:h-1/2 lg:h-full lg:w-1/2 sm:relative z-0'>
          <Image src='/hero.png' alt='Man' fill className='object-contain' />
        </div>
        {/* TEXT-CONTAINER */}
        <div className='h-full sm:h-2/3 py-4 md:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-between '>
          {/* LINKS CONTAINER */}
          <div className='flex h-1/3 justify-end flex-col align-center gap-4'>
            {/* LINKS */}
            <ul className='flex md:hidden gap-4 w-full justify-center '>
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
            {/* TITLE  */}
            <div className='flex flex-col gap-2 text-center relative'>
              <h1 className='text-4xl md:text-5xl font-bold tracking-[-2px]	'>
                Serhii Sezonchyk
              </h1>
              <h2 className='font-bold text-gray-500 tracking-[1px] md:text-md lg:text-xl'>
                React.js/Node.js/Next.js Developer
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className='tracking-[1px] md:text-sm lg:text-xl'>
            Welcome to my page! I`m motivated full-stack software developer with
            a proactive mindset and a knack for rapid learning. I possess a
            strong distaste for procrastination and a passion for embracing new
            challenges head-on. I am looking for a dynamic and friendly team
            where I can actively contribute to real projects, enhance my skill
            set, and flourish as an integral team member. Whether collaborating
            seamlessly or working independently, I take a versatile approach to
            achieving success in the realm of software development
          </p>

          {/* BUTTONS */}
          <div className='flex gap-4 lg:w-full'>
            <motion.a
              animate={{ scale: [1, 1.4, 1, 1.6, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                repeatDelay: 3.5,
                ease: 'easeIn',
              }}
              href='/about'
              className='min-w-36 p-4 rounded-lg ring-1 ring-black bg-black text-white text-center transition-all duration-300 ease-in hover:bg-transparent hover:text-black'
            >
              More...
            </motion.a>
            <a
              href='/contact'
              className='min-w-36  p-4 rounded-lg ring-1 ring-black text-center transition-all duration-300 ease-in hover:bg-black hover:text-white'
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
