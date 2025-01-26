import React from "react";
import { Plus } from 'lucide-react'; // Impor ikon Plus dari lucide-react

const Button = ({ label, children, onClick, type = "button", className, variant = "green", ikon }) => {
  const variantClasses = {
    green: "bg-green border-2 border-green hover:bg-white hover:text-green hover:border-green",
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
    oren: "bg-oren hover:bg-white border-2 border-oren hover:text-oren hover:border-oren",
    white: "bg-white text-blue-800 hover:font-bold",
    blue: "bg-blue-sky hover:bg-white hover:border-blue-sky border-2 hover:text-blue-sky font-medium"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition ${variantClasses[variant]} ${className}`}
    >
      {ikon && <span className="text-lg">{ikon}</span>}
      {children || label}
    </button>
  );
};

export default Button;
