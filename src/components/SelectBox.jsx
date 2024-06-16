export default function SelectBox({
  options,
  onChange,
  register,
  validation,
  id,
}) {
  const selectedOption =
    options.find((option) => {
      return option.selected;
    }) ?? options[0];

  return (
    <select
      className="bg-gray-200 border-2 border-gray-200 text-gray-600 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      onChange={onChange}
      defaultValue={selectedOption.value}
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
  );
}
