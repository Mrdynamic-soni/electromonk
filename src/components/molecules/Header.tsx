"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Body from "../atoms/typography/Body";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./Themetoggle";
import { ELECRO_LOGHT_LOGO, ELECRO_LOGO } from "@/assests/imageContants";

interface HeaderProps {
  onLinkClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLinkClick }) => {
  const { theme, activeTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const headingOptions = [
    { id: 0, title: "Home", onClick: () => onLinkClick("Home") },
    { id: 1, title: "Tutorial", onClick: () => onLinkClick("Tutorial") },
    { id: 3, title: "Contact", onClick: () => onLinkClick("Contact") },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      className="flex justify-between items-center gap-x-2 px-6 py-4 md:px-32 fixed w-full"
      style={{
        backgroundImage: `linear-gradient(to right, ${theme?.colors?.surface?.secondary}, ${theme?.colors?.surface?.tertiary})`,
      }}
    >
      <Image
        src={activeTheme === "light" ? ELECRO_LOGO : ELECRO_LOGHT_LOGO}
        alt="main-logo"
        height={50}
        width={50}
        className="rounded-full"
        onClick={() => onLinkClick("Home")}
      />
      <div className="flex md:hidden">
        <FaBars
          size={24}
          className="cursor-pointer text-white"
          onClick={toggleMenu}
        />
      </div>
      <div className="md:flex hidden justify-end items-center gap-x-4">
        {headingOptions.map((item) => (
          <div key={item.id} onClick={item.onClick}>
            <Body
              body={item.title}
              textColor={theme?.colors?.text?.primary}
              size="medium"
              variant="bold"
              className="cursor-pointer"
            />
          </div>
        ))}
        <ThemeToggle />
      </div>
      <motion.nav
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "100%" },
        }}
        ref={menuRef}
        style={{
          backgroundImage: `linear-gradient(to top, ${theme?.colors?.surface?.secondary}, ${theme?.colors?.surface?.tertiary})`,
          borderColor: theme?.colors?.text?.invertPrimary,
        }}
        className="absolute top-16 right-6 bg-white shadow-lg rounded-lg px-8 py-4 md:hidden z-10 border-2"
      >
        {headingOptions.map((item) => (
          <div key={item.id} className="py-2" onClick={item.onClick}>
            <Body
              body={item.title}
              textColor={theme?.colors?.text?.primary}
              size="medium"
              variant="bold"
              className="cursor-pointer"
            />
          </div>
        ))}
        <ThemeToggle />
      </motion.nav>
    </div>
  );
};

export default Header;
