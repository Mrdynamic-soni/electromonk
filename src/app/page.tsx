import Header from "@/components/molecules/Header";
import Home from "@/components/organisms/Home";
import Contact from "@/components/organisms/Contact";
import React from "react";
import Tutorial from "@/components/organisms/Tutorial";
import About from "@/components/organisms/About";

const App = () => {
  return (
    <div className="bg-blue-300">
      <Header />
      <Home />
      <Tutorial />
      <About />
      <Contact />
    </div>
  );
};

export default App;
