export default function IconCircle({ url }) {
  return (
    <img
      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 shadow-md"
      src={url}
      alt={url}
    />
  );
}
