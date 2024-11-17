import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  body: string;
  variant?: "bold" | "semibold" | "regular";
  size?: "small" | "medium" | "large";
  styles?: string;
  textColor?: string;
  className?: string;
}

const Body: React.FC<BodyProps> = ({
  body,
  variant,
  size = "small",
  className = "",
  styles,
  textColor,
  ...rest
}) => {
  const { theme } = useTheme();
  const variants = {
    bold: "font-bold",
    semibold: "font-semibold",
    regular: "font-normal",
  };

  const sizes = {
    small: "text-xs",
    medium: "text-base",
    large: "text-xl",
  };

  return (
    <p
      className={`${className} ${size && sizes[size]} ${
        variant && variants[variant]
      } ${styles}`}
      style={{ color: textColor || theme.colors.text.primary }}
      {...rest} // Spread the remaining props
    >
      {body}
    </p>
  );
};

export default Body;
