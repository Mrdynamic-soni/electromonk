"use client";
import React, { useRef } from "react";
import Header from "@/components/molecules/Header";
import Home from "@/components/organisms/Home";
import Contact from "@/components/organisms/Contact";
import Tutorial from "@/components/organisms/Tutorial";
import About from "@/components/organisms/About";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const tutorialRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-blue-300">
      <Header
        onLinkClick={(section: string) => {
          if (section === "Home") scrollToSection(homeRef);
          if (section === "Tutorial") scrollToSection(tutorialRef);
          if (section === "About") scrollToSection(aboutRef);
          if (section === "Contact") scrollToSection(contactRef);
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={tutorialRef}>
        <Tutorial />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
