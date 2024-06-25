export default function SelectBox({
  options,
  onChange,
  register,
  validation,
  id,
  label,
  error,
}) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <label className="text-gray-600 font-medium">{label}</label>}
      <select
        className="bg-gray-200 border-2 border-gray-200 text-gray-600 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        onChange={onChange}
        {...(register ? register(id, validation) : {})}
      >
        {options?.map((optionObject) => (
          <option
            key={optionObject.value}
            value={optionObject.value}
            className="text-gray-600"
          >
            {optionObject.description}
          </option>
        ))}
      </select>
      {error && <label className="text-red-500">{error}</label>}
    </div>
  );
}
