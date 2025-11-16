import React from "react";

const Button = ({
  children,
  variant = "primary",   // primary | secondary | danger | warning | success | info | dark | light
  size = "md",            // sm | md | lg
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  const sizeClass =
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;