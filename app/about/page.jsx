'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll } from 'framer-motion';

import ExperienceItem from '@/components/experienceItem';
import AboutSvg from '@/components/aboutSvg';
import { Pointer } from 'lucide-react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'ReduxToolkit',
  'SCSS/CSS',
  'Tailwind CSS',
  'Zustand',
  'Framer-motion',
  'Leaflet',
  'Node.js',
  'express',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'AWS S3',
];

const jobs = [
  {
    title: 'Bachelor`s in Software Engineering',
    description:
      'Studied Object-Oriented Programming, JavaScript, algorithms, software development methodologies, and team-building.',
    date: 'September 2019 - April 2023',
    name: 'CNuT',
    isJob: false,
    link: false,
  },
  {
    title: 'Developing World4Ua.online',
    description:
      'Volunteered in developing a website to aid refugees, implemented an interactive map using JS, HTML/CSS, and Leaflet.',
    date: 'Ongoing until March 2022 (Project closed)',
    name: 'CNuT',
    isJob: true,
    link: false,
  },
  {
    title: 'Full Stack Developer',
    description:
      'Engaged in full-stack development using Node.js, React.js, Next.js, TypeScript, and Redux Toolkit.',
    date: 'April 2023 - Present',
    name: 'Chernihiv Oblenergo',
    isJob: true,
    link: false,
  },
  {
    title: 'Master`s in Software Engineering',
    description:
      'Focused on advanced topics in Node.js, React, pedagogy, and algorithms.',
    date: 'September 2023 - January 2025',
    name: 'CNUT',
    isJob: false,
    link: false,
  },
  {
    title: 'Front-end PRO Course',
    description:
      'Explored SCSS, TypeScript, Git, REST, React, DOM manipulation, Redux Toolkit, Redux Thunk, and Webpack.',
    date: 'February 2024 - July 2024',
    name: 'Hillel',
    isJob: false,
    link: 'https://ithillel.ua/school',
  },
];

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const experienceRef = useRef();
  const cvRef = useRef();

  const isSkillRefInView = useInView(skillRef, {
    once: true,
    margin: '-100px',
  });
  const isExperienceRefInView = useInView(experienceRef, {
    once: true,
    margin: '-100px',
  });
  const isCvRefInView = useInView(cvRef, {
    once: true,
    margin: '-100px',
  });
  return (
    <motion.div
      className='h-full '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div
        className='h-full overflow-scroll lg:flex scroll-smooth'
        ref={containerRef}
      >
        <div>
          {/* NAVIGATION */}
          <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16'>
            <a className='p-2 bg-white rounded-md' href='#biography'>
              Biography 🙋‍♂️
            </a>
            <a className='p-2 bg-white rounded-md' href='#skills'>
              Skills 📚
            </a>
            <a className='p-2 bg-white rounded-md' href='#experience'>
              Experience 🖥️
            </a>
            <a className='p-2 bg-white rounded-md' href='#cv'>
              CV 📝
            </a>
          </div>
          {/* ABOUT CONTAINER */}
          <div className='p-4 sm:p-8 md:p-12 lg:p-20 pt-8 lg:pt-12 xl:pt-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
            {/* BIOGRAPHY  SECTION*/}
            <section id='biography' className=''>
              <div className='flex flex-col gap-12 justify-center'>
                {/* BIOGRAPHY TITLE */}
                <h2 className='font-bold text-2xl'>Biography 🙋‍♂️</h2>
                {/* BIOGRAPHY TEXT */}
                <p className='text-xl'>
                  Hello! My name is Sergiy, and I&apos;m a passionate full-stack
                  developer currently pursuing my master&apos;s degree in software
                  engineering. With a bachelor&apos;s degree already under my belt,
                  I&apos;ve been actively engaged in the tech industry for a year
                  now, primarily working with React and Node.js technologies,
                  while also diving into Next.js. <br />
                  Every day, I dedicate time to honing my skills in English and
                  exploring new avenues in programming. I am on the lookout for
                  an enriching environment where I can continue to grow both
                  personally and professionally. For me, being surrounded by
                  intelligent and supportive individuals who are always ready to
                  lend a hand is paramount. <br />
                  <br />
                  My ultimate goal is to excel in my field and share my
                  knowledge with fellow developers. Outside of coding, I enjoy
                  staying active through sports and keeping up with the latest
                  in technology.
                </p>
                {/* BIOGRAPHY DETAILS */}
                <span className='italic'>
                  If you&apos;re seeking a dedicated and driven team member who
                  values collaboration and continuous learning, I&apos;d love to
                  connect!
                </span>
                {/* BIOGRAPHY SCROLL */}
                <motion.svg
                  initial={{ opacity: 0.2, y: 0 }}
                  animate={{ opacity: 1, y: '10px' }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width={50}
                  height={50}
                >
                  <path
                    d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                    stroke='#000000'
                    strokeWidth='1'
                  ></path>
                  <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
                  <path
                    d='M15 11L12 14L9 11'
                    stroke='#000000'
                    strokeWidth='1'
                  ></path>
                </motion.svg>
              </div>
            </section>

            {/* SKILLS  SECTION*/}
            <section
              id='skills'
              className='flex flex-col gap-12 justify-center'
              ref={skillRef}
            >
              {/* SKILLS TITLE */}
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className='font-bold text-2xl'
              >
                SKILLS 📚
              </motion.h2>
              {/* SKILLS LIST */}
              <motion.ul
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className='skills-list flex gap-4 flex-wrap'
                
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={isSkillRefInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: isSkillRefInView ? index * 0.1 : 0,
                    }}
                    className='rounded p-2 text-sm cursor-pointer bg-black text-white transition-all duration-150 ease-linear hover:bg-white hover:text-black'
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
              {/* SKILLS SCROLL */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={50}
                height={50}
              >
                <path
                  d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
                <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
                <path
                  d='M15 11L12 14L9 11'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
              </motion.svg>
            </section>

            {/* EXPERIENCE  SECTION*/}
            <section
              id='experience'
              className='flex flex-col gap-12 justify-center'
              ref={experienceRef}
            >
              {/* EXPERIENCE TITLE */}
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className='font-bold text-2xl'
              >
                EXPERIENCE 🖥️
              </motion.h2>

              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: '-100vh' }}
                animate={isExperienceRefInView ? { x: '0' } : {}}
                className=''
              >
                {/* EXPERIENCE LIST ITEM*/}
                {jobs.map((job, index) => (
                  <div key={index} className='flex justify-between'>
                    {/* LEFT*/}
                    <div className='w-[40%]'>
                      {job.isJob && <ExperienceItem job={job} />}
                    </div>
                    {/* CENTER*/}
                    <div className='w-[10%] flex flex-col items-center'>
                      {/* LINE */}
                      <div className='w-1 h-full bg-gray-600 rounded relative'>
                        {/* LINE CIRCLE  */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                      </div>
                    </div>
                    {/* RIGHT*/}
                    <div className='w-[40%]'>
                      {!job.isJob && <ExperienceItem job={job} />}
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={50}
                height={50}
              >
                <path
                  d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
                <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
                <path
                  d='M15 11L12 14L9 11'
                  stroke='#000000'
                  strokeWidth='1'
                ></path>
              </motion.svg>
            </section>
            <section
              id='cv'
              className='flex flex-col gap-12 justify-center pb-48'
              ref={cvRef}
            >
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isCvRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className='font-bold text-2xl'
              >
                Download my CV 📝
              </motion.h2>
              <motion.div
                initial={{ x: '-100vh' }}
                animate={isCvRefInView ? { x: '0' } : {}}
                className=''
              >
                <a
                  href='/SerhiiSezonchyk_cv_fullstack-developer.pdf'
                  target='blank'
                  className='rounded-lg w-100% sm:w-fit bg-black text-white ring-1 ring-black p-4 flex items-center hover:bg-white hover:text-black transition-all duration-300 ease-in hover:scale-105'
                >
                  Click here 👆
                </a>
              </motion.div>
            </section>
          </div>
        </div>

        {/* ANIMATED SVG */}
        <div className='hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30'>
          <AboutSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
