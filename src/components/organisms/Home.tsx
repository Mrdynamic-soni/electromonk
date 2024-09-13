"use client";

import React from "react";
import Heading from "../atoms/typography/Heading";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ELECRO_LOGHT_LOGO,
  ELECRO_LOGO,
  ELECTRO_W_BG,
} from "@/assests/imageContants";
import { TOPMAT_LOGO } from "@/assests/svgConstants";

const Home = () => {
  const { activeTheme, theme } = useTheme();
  return (
    <div
      className="md:px-32 py-8  pt-32"
      style={
        {
          // background: theme?.colors?.surface?.tertiary,
        }
      }
    >
      <Heading
        customStyles="text-center text-4xl"
        heading="Welcome to electromonk"
        size="xl"
        weight="bold"
      />

      <Image
        src={ELECTRO_W_BG}
        alt="main-logo"
        height={200}
        width={200}
        className="mx-auto"
      />
    </div>
  );
};

export default Home;
