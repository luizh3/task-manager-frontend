export default function Input({
  className,
  placeHolder,
  icon,
  type,
  onFocus,
  onBluer,
  autoFocus,
  onKeyPressed,
  onChange,
}) {
  return (
    <div
      className={`${className} flex justify-between bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus-within:bg-white focus-within:border-purple-500`}
    >
      <input
        className="bg-gray-200 focus:outline-none focus:bg-white flex-grow"
        id="inline-password"
        type={type}
        onFocus={onFocus}
        onBlur={onBluer}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        onKeyPress={onKeyPressed}
        onChange={onChange}
      />
      {icon}
    </div>
  );
}

//md:w-2/3
