export default function SelectBox({ options, placeHolder }) {
  return (
    <select
      id="countries"
      className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    >
      <option selected>{placeHolder}</option>
      {options?.map((optionObject) => (
        <option key={optionObject.id} value={optionObject.id}>
          {optionObject.description}
        </option>
      ))}
    </select>
  );
}
