'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { contactLinks } from '../utils/data';
export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
      <section className="flex h-full flex-col overflow-scroll px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48 ">
        {/* IMAGE-CONTAINER */}
        <div className="z-0 hidden sm:relative sm:block sm:h-1/3 md:h-1/2 lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="Man" fill className="object-contain drop-shadow-png" />
        </div>
        {/* TEXT-CONTAINER */}
        <div className="flex h-full flex-col items-center justify-between gap-8 py-4 sm:h-2/3 md:h-1/2 lg:h-full lg:w-1/2 ">
          {/* LINKS CONTAINER */}
          <div className="align-center flex h-1/3 flex-col justify-end gap-4">
            {/* LINKS */}
            <ul className="flex w-full justify-center gap-4 md:hidden ">
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
            {/* TITLE  */}
            <div className="relative flex flex-col gap-2 text-center">
              <h1 className="text-4xl font-bold tracking-[-2px] md:text-5xl	">Serhii Sezonchyk</h1>
              <h2 className="md:text-md font-bold tracking-[1px] text-gray-500 lg:text-xl">
                React.js/Node.js/Next.js Developer
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="tracking-[1px] md:text-sm lg:text-xl">
            Welcome to my page! I`m motivated full-stack software developer with a proactive mindset and a knack for
            rapid learning. I possess a strong distaste for procrastination and a passion for embracing new challenges
            head-on. I am looking for a dynamic and friendly team where I can actively contribute to real projects,
            enhance my skill set, and flourish as an integral team member. Whether collaborating seamlessly or working
            independently, I take a versatile approach to achieving success in the realm of software development
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 lg:w-full">
            <motion.a
              animate={{ scale: [1, 1.4, 1, 1.6, 1] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                repeatDelay: 3.5,
                ease: 'easeIn',
              }}
              title="Go to about page"
              href="/about"
              className="min-w-36 rounded-lg bg-black p-4 text-center text-white ring-1 ring-black transition-all duration-300 ease-in hover:bg-transparent hover:text-black"
            >
              More...
            </motion.a>
            <a
              href="/contact"
              title="Go to contact page"
              className="min-w-36  rounded-lg p-4 text-center ring-1 ring-black transition-all duration-300 ease-in hover:bg-black hover:text-white"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
