"use client"

import React, { useState, useEffect } from 'react';

const ToggleTheme: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <small 
      onClick={toggleDarkMode} 
      className='flex justify-center items-center cursor-pointer'
    >
      {isDarkMode 
        ? <i className='bx bx-moon'></i>
        : <i className='bx bx-sun'></i>
      }
      <button>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </small>
  );
}

export default ToggleTheme;