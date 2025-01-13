import React from "react";

const Input = ({label, placeholder}) => {
    return(
        <div className="max-w-sm">
            <label htmlFor="input-label" className="block text-sm font-medium mb-2">{label}</label>
            <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder={placeholder}/>
        </div>
    );
}


export default Input;