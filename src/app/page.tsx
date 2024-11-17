"use client";
import React, { useRef } from "react";
import Header from "@/components/molecules/Header";
import Home from "@/components/organisms/Home";
import Contact from "@/components/organisms/Contact";
import Tutorial from "@/components/organisms/Tutorial";
import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/organisms/Footer";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const tutorialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-blue-300"
      style={{
        background: theme?.colors?.surface?.webBg,
      }}
    >
      <Header
        onLinkClick={(section: string) => {
          if (section === "Home") scrollToSection(homeRef);
          if (section === "Tutorial") scrollToSection(tutorialRef);
          if (section === "Contact") scrollToSection(contactRef);
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={tutorialRef}>
        <Tutorial />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
