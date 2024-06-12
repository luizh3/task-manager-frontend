export default function MultiIconPreview({ iconsUrl }) {
  const nrLimitIcons = 3;
  const hasMoreIconsLimit = iconsUrl.length > nrLimitIcons;
  const nrLeftIcons = iconsUrl.length - nrLimitIcons;
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {iconsUrl.slice(0, nrLimitIcons).map((url, index) => (
        <img
          key={index}
          className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 shadow-md"
          src={url}
          alt={url}
        />
      ))}
      {hasMoreIconsLimit && (
        <div className="w-8 h-8 border-2 border-white rounded-full bg-blue-500 text-white text-center shadow-md">
          +{nrLeftIcons}
        </div>
      )}
    </div>
  );
}
