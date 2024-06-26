export default function ButtonOption({ icon, message, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-3 h-8 w-full flex space-x-1 shadow-md rounded items-center hover:bg-gray-100"
    >
      {icon}
      <span className="font-medium text-gray-600">{message}</span>
    </button>
  );
}
