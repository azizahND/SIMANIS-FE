const Select = ({
  label,
  options,
  onChange,
  value,
  name,
  required = false,
  className = "",
  width = "w-full",
}) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <select
        className={`py-3 px-4 block border-2 rounded-lg text-sm focus:ring-blue-premier disabled:opacity-50 disabled:pointer-events-none ${className} ${width}`}
        onChange={handleChange}
        value={value || ""}
        name={name}
        required={required}
      >
        <option value="" disabled>
          Pilih {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
