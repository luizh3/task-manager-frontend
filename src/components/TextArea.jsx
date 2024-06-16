export default function TextArea({
  className,
  placeHolder,
  register,
  validation,
  error,
  id,
  ...rest
}) {
  return (
    <div className={`${className} flex flex-col space-y-2`}>
      <textarea
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
