'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

import AboutSvg from '@/components/aboutSvg';
import ExperienceItem from '@/components/experienceItem';
import Link from 'next/link';

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
    description: `My first step in getting a higher education:<br>
    - collaborate with the team;<br>
    - different social activities;<br>
    - developing apps and websites on Java/c#/JS;<br>
    - algorithms;<br>
    - working with deadlines;<br>
    - linux/networking;<br>
    - Databases: SQL /PostgreSQL /Queries etc.`,
    date: 'September 2019 - April 2023',
    name: 'Chernihiv Polytechnic National University',
    isJob: false,
    link: false,
  },
  {
    title: 'Developing World4Ua.online',
    description: `Volunteered in developing a website to aid refugees, implemented an interactive map using JS, HTML/CSS, and Leaflet.`,
    date: 'Ongoing until March 2022 (Project closed)',
    name: 'Chernihiv Polytechnic National University',
    isJob: true,
    link: false,
  },
  {
    title: 'Full Stack Developer',
    description: `Engaged in full-stack development using Node.js, React.js, Next.js, TypeScript, and Redux Toolkit. <br>
    My responsibilities:<br>
    - write high-quality code;<br>
    - Developing the client side of websites using React/Next;<br>
    - Developing server side of websites using Node.js /PostgreSQL /Prisma;<br>
    - Optimization of code;<br>
    - Refactoring of code.`,
    date: 'April 2023 - Present',
    name: 'Chernihiv Oblenergo',
    isJob: true,
    link: false,
  },
  {
    title: 'Master`s in Software Engineering',
    description: `Focused on advanced topics in Node.js, React, pedagogy, and algorithms.`,
    date: 'September 2023 - January 2025',
    name: 'Chernihiv Polytechnic National University',
    isJob: false,
    link: false,
  },
  {
    title: 'Front-end PRO Course',
    description: `Course with really cool teachers.<br>
    Improving my skills in front-end development and opening up new technologies. 
    Improved skills: SCSS, TypeScript, Git, REST, React, DOM manipulation, Redux Toolkit, Redux Thunk, and Webpack.`,
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
    <motion.div className="h-full " initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
      {/* NAVIGATION */}
      <div className=" fixed right-0 z-40 hidden flex-col gap-4 px-4 text-center  text-xs lg:bottom-40 lg:mb-[-7rem] lg:flex xl:bottom-48 xl:mb-[-10rem] xl:flex-row">
        <a
          className="min-w-[20%] rounded-md border-2 border-red-200 bg-white p-2 transition-all duration-300 ease-out hover:bg-red-200 hover:text-white md:min-w-32"
          href="#biography"
        >
          Biography 🙋‍♂️
        </a>
        <a
          className="min-w-[20%] rounded-md border-2 border-red-200 bg-white p-2 transition-all duration-300 ease-out hover:bg-red-200 hover:text-white md:min-w-32"
          href="#skills"
        >
          Skills 📚
        </a>
        <a
          className="min-w-[20%] rounded-md border-2 border-red-200 bg-white p-2 transition-all duration-300 ease-out hover:bg-red-200 hover:text-white md:min-w-32"
          href="#experience"
        >
          Experience 🖥️
        </a>
        <a
          className="min-w-[20%] rounded-md border-2 border-red-200 bg-white p-2 transition-all duration-300 ease-out hover:bg-red-200 hover:text-white md:min-w-32"
          href="#cv"
        >
          CV 📝
        </a>
      </div>
      <div className="h-full overflow-scroll scroll-smooth lg:flex" ref={containerRef}>
        <div className="lg:w-2/3 xl:w-1/2">
          {/* ABOUT CONTAINER */}
          <div className="about flex flex-col gap-24 p-4 pt-8 sm:p-8 md:gap-32 md:p-12 lg:gap-48 lg:p-20 lg:pt-12 xl:gap-64 xl:pt-24 ">
            {/* BIOGRAPHY  SECTION*/}
            <section id="biography" className="">
              <div className="flex flex-col justify-center gap-12">
                {/* BIOGRAPHY TITLE */}
                <h2 className="text-2xl font-bold">Biography 🙋‍♂️</h2>
                {/* BIOGRAPHY TEXT */}
                <p className="text-xl">
                  Hello! My name is Sergiy, and I&apos;m a passionate full-stack developer currently pursuing my
                  master&apos;s degree in software engineering. With a bachelor&apos;s degree already under my belt,
                  I&apos;ve been actively engaged in the tech industry for a year now, primarily working with React and
                  Node.js technologies, while also diving into Next.js. <br />
                  Every day, I dedicate time to honing my skills in English and exploring new avenues in programming. I
                  am on the lookout for an enriching environment where I can continue to grow both personally and
                  professionally. For me, being surrounded by intelligent and supportive individuals who are always
                  ready to lend a hand is paramount. <br />
                  <br />
                  My ultimate goal is to excel in my field and share my knowledge with fellow developers. Outside of
                  coding, I enjoy staying active through sports and keeping up with the latest in technology.
                </p>
                {/* BIOGRAPHY DETAILS */}
                <span className="italic">
                  If you&apos;re seeking a dedicated and driven team member who values collaboration and continuous
                  learning,{' '}
                  <Link title="Go to contact page" className="cursor-pointer underline" href={'/contact'}>
                    I&apos;d love to connect!
                  </Link>
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
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                >
                  <path
                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                    stroke="#000000"
                    strokeWidth="1"
                  ></path>
                  <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                  <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
                </motion.svg>
              </div>
            </section>

            {/* SKILLS  SECTION*/}
            <section id="skills" className="flex flex-col justify-center gap-12" ref={skillRef}>
              {/* SKILLS TITLE */}
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
              >
                SKILLS 📚
              </motion.h2>
              {/* SKILLS LIST */}
              <motion.ul
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="skills-list flex flex-wrap gap-4"
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
                    className="cursor-pointer rounded bg-black p-2 text-sm text-white transition-all duration-150 ease-linear hover:bg-white hover:text-black active:bg-white active:hover:text-black"
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
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </section>

            {/* EXPERIENCE  SECTION*/}
            <section id="experience" className="flex flex-col justify-center gap-12" ref={experienceRef}>
              {/* EXPERIENCE TITLE */}
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
              >
                EXPERIENCE 🖥️
              </motion.h2>

              {/* EXPERIENCE LIST */}
              <motion.div initial={{ x: '-100vh' }} animate={isExperienceRefInView ? { x: '0' } : {}} className="">
                {/* EXPERIENCE LIST ITEM*/}
                {jobs.map((job, index) => (
                  <div key={index} className="flex justify-center">
                    {/* LEFT*/}
                    <div className="w-[45%]">{job.isJob && <ExperienceItem job={job} />}</div>
                    {/* CENTER*/}
                    <div className="flex w-[10%] flex-col items-center">
                      {/* LINE */}
                      <div className="relative h-full w-1 rounded bg-gray-600">
                        {/* LINE CIRCLE  */}
                        <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-violet-400"></div>
                      </div>
                    </div>
                    {/* RIGHT*/}
                    <div className="w-[45%]">{!job.isJob && <ExperienceItem job={job} />}</div>
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
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </section>
            <section id="cv" className="flex flex-col justify-center gap-12 pb-48" ref={cvRef}>
              <motion.h2
                initial={{ x: '-100vh' }}
                animate={isCvRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
              >
                Download my CV 📝
              </motion.h2>
              <motion.div initial={{ x: '-100vh' }} animate={isCvRefInView ? { x: '0' } : {}} className="">
                <a
                  href="/SerhiiSezonchyk_cv_fullstack-developer.pdf"
                  target="blank"
                  title="Download CV"
                  className="w-100% flex items-center rounded-lg bg-black p-4 text-white ring-1 ring-black transition-all duration-300 ease-in hover:scale-105 hover:bg-white hover:text-black sm:w-fit"
                >
                  Click here 👆
                </a>
              </motion.div>
            </section>
          </div>
        </div>

        {/* ANIMATED SVG */}
        <div className="sticky top-0 hidden w-1/3 lg:block xl:w-1/2">
          <AboutSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
