export default function IconCircle({ url, description, imageWidth, imageHeight }) {
  return (
    <div className="group relative">
      {description && (
        <div className="flex shadow-md bg-white rounded hidden group-hover:block absolute bottom-9 p-1 px-2">
          <span className="font-medium text-gray-600">{description}</span>
        </div>
      )}
      <img
        className={`${imageWidth ?? "w-8"} ${imageHeight ?? "h-8"} border-2 border-white rounded-full border-gray-300 shadow-md`}
        src={url}
        alt={url}
      />
    </div>
  );
}
