import React from "react";
import { Plus } from 'lucide-react'; // Impor ikon Plus dari lucide-react

const Button = ({ label, children, onClick, type = "button", className, variant = "green", ikon }) => {
  const variantClasses = {
    green: "bg-green border-2 border-green hover:bg-white hover:text-green hover:border-green font-medium",
    primary: "bg-blue-premier hover:bg-blue-600 font-medium text-white",
    danger: "bg-red-500 hover:bg-white font-medium border-2 hover:border-red-500 hover:text-red-500",
    oren: "bg-oren hover:bg-white border-2 border-oren hover:text-oren hover:border-oren",
    white: "bg-white text-blue-800 hover:font-bold",
    blue: "bg-blue-sky font-bold hover:bg-white hover:border-blue-sky text-white border-2 border-blue-sky hover:text-blue-sky font-medium",
    yellow:"bg-yellow-500 hover:bg-white border-2 hover:border-yellow-500 hover:text-yellow-500",
    teal:"bg-teal-100 text-teal-700 border-teal-500",
    greenn: "text-green border-2 border-green hover:bg-transparent hover:text-green font-medium transition-transform duration-300 hover:-translate-y-1",
    orenn: "text-oren border-2 border-oren hover:bg-transparent hover:text-oren font-medium transition-transform duration-300 hover:-translate-y-1",
    bluee: "text-blue-sky border-2 border-blue-sky hover:bg-transparent hover:text-blue-sky font-medium transition-transform duration-300 hover:-translate-y-1",
    


  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg  font-bold  transition ${variantClasses[variant]} ${className}`}
    >
      {ikon && <span className="text-lg">{ikon}</span>}
      {children || label}
    </button>
  );
};

export default Button;
