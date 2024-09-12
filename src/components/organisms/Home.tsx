"use client";

import React from "react";
import Heading from "../atoms/typography/Heading";
import { useTheme } from "@/contexts/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className="md:px-32 py-8 h-screen pt-32"
      style={{
        background: theme?.colors?.surface?.tertiary,
      }}
    >
      <Heading
        customStyles="text-center text-4xl"
        heading="Welcome to electromonk"
        size="xl"
        weight="bold"
      />
    </div>
  );
};

export default Home;
