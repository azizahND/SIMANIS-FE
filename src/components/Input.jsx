import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, className,label }) => {
  return (
    <><div className=""></div><><label htmlFor="input-label" className="block text-sm font-bold mb-2 text-white">
      {label}
    </label><input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md ${className}`} /></></>
  );
};

export default Input;
