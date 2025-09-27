import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  // Base styles
  const baseStyles = "cursor-pointer rounded-full border-none font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

  // Variant styles
  const variants = {
    primary: "bg-gradient-to-r from-pink-600 to-pink-800 hover:shadow-xl hover:shadow-pink-500/40",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-800 hover:shadow-xl hover:shadow-gray-500/40",
    success: "bg-gradient-to-r from-green-600 to-green-800 hover:shadow-xl hover:shadow-green-500/40",
    danger: "bg-gradient-to-r from-red-600 to-red-800 hover:shadow-xl hover:shadow-red-500/40",
    warning: "bg-gradient-to-r from-yellow-600 to-yellow-800 hover:shadow-xl hover:shadow-yellow-500/40",
    info: "bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-xl hover:shadow-blue-500/40",
    unlimited: "bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-xl hover:shadow-orange-500/40",
    esim: "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl hover:shadow-purple-500/40",
  };

  // Size styles
  const sizes = {
    small: "px-4 py-2 text-xs",
    medium: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
    xlarge: "px-8 py-4 text-base w-40",
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;