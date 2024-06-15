export default function SelectBox({ options, placeHolder, onChange }) {
  return (
    <select
      id="countries"
      className="bg-gray-200 border-2 border-gray-200 text-gray-600 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      onChange={onChange}
    >
      <option selected disabled hidden>
        {placeHolder}
      </option>
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
