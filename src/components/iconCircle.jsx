export default function IconCircle({ url, description }) {
  return (
    <div className="group relative">
      {description && (
        <div className="flex shadow-md bg-white rounded hidden group-hover:block absolute bottom-9 z-10 p-1 px-2">
          <span className="font-medium text-gray-600">{description}</span>
        </div>
      )}
      <img
        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 shadow-md"
        src={url}
        alt={url}
      />
    </div>
  );
}
