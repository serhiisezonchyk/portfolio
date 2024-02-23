'use client';
import { motion } from 'framer-motion';
const text = 'Say hello!';

const ContactPage = () => {
  return (
    <motion.div className="h-full" initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="flex h-1/4 items-center justify-center text-3xl lg:h-full lg:w-1/2 lg:text-6xl">
          <motion.h1>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👋
          </motion.h1>
        </div>

        {/* FORM CONTAINER */}
        <div className="flex h-[60%] flex-col justify-center gap-4 overflow-scroll rounded-xl bg-red-50 p-12 text-sm md:gap-8 md:text-lg lg:h-[90%] lg:w-1/2 lg:self-center">
          <div className="flex flex-col justify-center gap-2">
            <p>📧Write me by email:</p>
            <a
              href="mailto:sergey040901@gmail.com"
              className="rounded-lg bg-black px-4 py-2 text-center text-white ring-1 ring-black transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-black"
            >
              Send Email
            </a>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p>➣Write me by Telegram:</p>
            <a
              href="https://t.me/nxthinggg"
              className="rounded-lg bg-black px-4 py-2 text-center text-white ring-1 ring-black transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-black"
            >
              Send Message
            </a>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p>📱Call me:</p>
            <a
              href="tel:+380935182100"
              className="rounded-lg bg-[#00ff00] px-4 py-2 text-center text-black ring-1 ring-[#00ff00] transition-all duration-300 ease-in-out hover:bg-[#00ff00a5]"
            >
              +380935182100
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
