"use client";

import React from "react";
import Heading from "../atoms/typography/Heading";
import Body from "../atoms/typography/Body";

const About = () => {
  return (
    <div className="md:px-32 py-8  pt-32">
      <Heading
        customStyles="text-center text-4xl"
        heading="About"
        size="xl"
        weight="bold"
      />
    </div>
  );
};

export default About;
