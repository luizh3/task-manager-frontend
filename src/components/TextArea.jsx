export default function TextArea({
  className,
  placeHolder,
  register,
  validation,
  error,
  id,
  label,
  ...rest
}) {
  const focusBorderColor = error
    ? "focus-within:border-red-500"
    : "focus-within:border-purple-500";

  return (
    <div className={`${className} flex flex-col space-y-2`}>
      {label && <label className="text-gray-600 font-medium">{label}</label>}
      <textarea
        className={`${focusBorderColor} bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
        id="inline-password"
        type="password"
        placeholder={placeHolder}
        {...(register ? register(id, validation) : {})}
        {...rest}
      />
      {error && <label className="text-red-500">{error}</label>}
    </div>
  );
}
