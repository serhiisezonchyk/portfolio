'use client';
import Navbar from '@/components/navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="h-screen w-screen bg-gradient-to-b from-violet-200 to-red-100">
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default text-2xl text-white md:text-8xl"
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
          {pathname !== '/' ? pathname.substring(1).toUpperCase() : 'HOME'}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-40 h-screen w-screen rounded-t-[100px] bg-black"
          initial={{ height: '140vh' }}
          animate={{ height: '0', transition: { delay: 0.5 } }}
        />
        <header className="h-12 py-4 md:h-16 ">
          <Navbar />
        </header>
        <main className="h-[calc(100vh-3rem)]  lg:h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
