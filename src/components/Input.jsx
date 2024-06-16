export default function Input({
  id,
  className,
  placeHolder,
  icon,
  register,
  validation,
  error,
  label,
  ...rest
}) {
  const focusBorderColor = error
    ? "focus-within:border-red-500"
    : "focus-within:border-purple-500";

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <label className="text-gray-600 font-medium">{label}</label>}
      <div
        className={`${className} ${focusBorderColor} flex justify-between bg-gray-200 h-11 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus-within:bg-white`}
      >
        <input
          className="bg-gray-200 focus:outline-none focus:bg-white flex-grow"
          placeholder={placeHolder}
          {...(register ? register(id, validation) : {})}
          {...rest}
        />
        {icon}
      </div>
      {error && <label className="text-red-500">{error}</label>}
    </div>
  );
}

//md:w-2/3
