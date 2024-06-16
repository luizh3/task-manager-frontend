export default function Button({
  styleType,
  children,
  width,
  icon,
  onClick,
  ...rest
}) {
  const styleByType = new Map([
    ["primary", "bg-violet-500 text-white hover:bg-violet-300"],
    [
      "secundary",
      "bg-gray-300 text-gray-600 hover:bg-gray-200 border border-gray-300",
    ],
  ]);

  const dsStyle = styleByType.get(styleType) ?? "";

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${dsStyle} ${
        width ?? "w-40"
      } transition-all duration-200 font-bold py-2 px-4 h-11 rounded inline-flex items-center justify-center`}
    >
      <span className="flex items-center">
        {children}
        {icon}
      </span>
    </button>
  );
}
