import React from "react";

const Button = ({ label, children, onClick, type = "button", className, variant = "green" }) => {
  // Map untuk menentukan warna berdasarkan varian
  const variantClasses = {
    green: "bg-green hover:bg-green-dark",
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg text-white transition ${variantClasses[variant]} ${className}`}
    >
      {children || label}
    </button>
  );
};

export default Button;
