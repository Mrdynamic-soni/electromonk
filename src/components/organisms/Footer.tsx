import React from "react";
import Body from "../atoms/typography/Body";
import { useTheme } from "@/contexts/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className="fixed bottom-0 w-full text-white text-center px-2 py-1"
      style={{ background: theme?.colors?.surface?.secondary }}
    >
      <div className="flex justify-center gap-x-2 flex-wrap">
        <Body
          body="© 2024 Your Website. All rights reserved. Developed with ❤️ by "
          size="medium"
          variant="semibold"
        />
        <Body
          onClick={() => {
            window.open("https://saurabhsoni-pi.vercel.app/");
          }}
          body="Saurabh Soni"
          size="medium"
          variant="bold"
          className="underline cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
