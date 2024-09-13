"use client";
import { useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggle = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      onClick={toggle}
      className="cursor-pointer w-16 h-8 flex items-center p-1 rounded-full"
      initial={{
        backgroundColor: darkMode ? "rgb(31, 41, 55)" : "rgb(229, 231, 235)",
      }}
      animate={{
        backgroundColor: darkMode ? "rgb(31, 41, 55)" : "rgb(229, 231, 235)",
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-6 h-6 flex items-center justify-center"
        initial={{ x: darkMode ? 24 : 0 }}
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {darkMode ? (
          <motion.div
            key="moon"
            initial={{ x: -24 }}
            animate={{ x: 8 }}
            exit={{ x: 24 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <FaMoon color={theme?.colors?.text?.primary} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ x: 24 }}
            animate={{ x: 0 }}
            exit={{ x: -24 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <LuSunMedium />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
