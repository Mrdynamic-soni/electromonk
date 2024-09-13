import Header from "@/components/molecules/Header";
import Home from "@/components/organisms/Home";
import Contact from "@/components/organisms/Contact";
import React from "react";

const App = () => {
  return (
    <div className="bg-blue-300">
      <Header />
      <Home />
      <Contact />
    </div>
  );
};

export default App;
