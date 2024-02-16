'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathname}
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'
      >
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathname.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
          initial={{ height: '140vh' }}
          animate={{ height: '0', transition: { delay: 0.5 } }}
        />
        <header className='h-12 lg:h-24'>
          <Navbar />
        </header>
        <main className='h-[calc(100vh-3rem)] lg:h-[calc(100vh-6rem)] overflow-scroll'>
          {children}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
