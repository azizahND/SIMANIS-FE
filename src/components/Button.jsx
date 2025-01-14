import React from "react";

const Button = ({ label, children, onClick, type = "button", className }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-6 py-3 rounded-lg bg-green text-white hover:bg-green transition ${className}`}
      >
        {children  || label} 
      </button>
    );
  };

export default Button;
