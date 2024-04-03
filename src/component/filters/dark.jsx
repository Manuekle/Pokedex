/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { MoonStars, Sun } from '@phosphor-icons/react';

import { motion } from 'framer-motion';
// import Moon from '../assets/svg/moon';
// import Sun from '../assets/svg/sun';

function dark() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Dark mode is supported');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="flex justify-center items-center" onClick={toggleSwitch}>
        <motion.div layout transition={spring}>
          <button
            type="button"
            onClick={toggleSwitch}
            className={
              theme === 'dark'
                ? 'bg-[#0A0A0A] relative border font-bold border-zinc-900 rounded-md h-full py-2 px-3 text-sm text-amber-300 lowercase appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out'
                : 'bg-[#0A0A0A] relative border font-bold border-zinc-900 rounded-md h-full py-2 px-3 text-sm text-amber-300 lowercase appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out'
            }
          >
            <motion.div whileTap={{ rotate: 360 }}>
              {theme === 'dark' ? (
                <MoonStars size={16} weight="bold" />
              ) : (
                <Sun size={16} weight="bold" />
              )}
            </motion.div>
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default dark;
