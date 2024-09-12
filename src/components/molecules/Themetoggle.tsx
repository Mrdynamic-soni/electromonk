'use client'
import { useState } from 'react';
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useTheme } from '@/contexts/ThemeContext';


const ThemeToggle: React.FC = () => {
  const {theme, toggleTheme} = useTheme()
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggle = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };

  

  return (
    <div
      onClick={toggle}
      className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
        darkMode ? 'bg-gray-800 justify-end' : 'bg-gray-200 justify-start'
      }`}
    >
    {darkMode ? (
      <FaMoon color={theme?.colors?.text?.primary}/>  
      ) : (
        <LuSunMedium/>
      )}
    </div>
  );
};

export default ThemeToggle;