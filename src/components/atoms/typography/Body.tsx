import React from "react";

interface BodyProps {
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
}) => {
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
      style={{ color: textColor }}
    >
      {body}
    </p>
  );
};

export default Body;
