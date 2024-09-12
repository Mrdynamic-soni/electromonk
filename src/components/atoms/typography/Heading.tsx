"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

interface HeadingProps {
  size?: "xl" | "l" | "m" | "s";
  weight?: "bold" | "semibold" | "normal";
  heading: string;
  customStyles?: string;
  textColor?: string;
}

const Heading: React.FC<HeadingProps> = ({
  size = "s",
  weight = "semibold",
  customStyles,
  textColor,
  heading,
}) => {
  const { theme } = useTheme();

  const fontSizeClasses = {
    xl: "text-4xl",
    l: "text-2xl",
    m: "text-lg",
    s: "text-sm",
  };

  const fontWeightClasses = {
    bold: "font-black",
    semibold: "font-bold",
    normal: "font-normal",
  };

  return (
    <p
      className={`${fontSizeClasses[size]} ${fontWeightClasses[weight]} ${customStyles}`}
      style={{ color: textColor || theme.colors.text.primary }}
    >
      {heading}
    </p>
  );
};

export default Heading;
