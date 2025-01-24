
const Select = ({ label, options, onChange, value, name, required = false }) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value
      }
    });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-premier focus:ring-blue-premier disabled:opacity-50 disabled:pointer-events-none"
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