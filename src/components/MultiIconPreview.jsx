import IconCircle from "./iconCircle";

export default function MultiIconPreview({ iconsUrl, className }) {
  const nrLimitIcons = 3;
  const hasMoreIconsLimit = iconsUrl.length > nrLimitIcons;
  const nrLeftIcons = iconsUrl.length - nrLimitIcons;
  return (
    <div className={`${className} flex -space-x-4 rtl:space-x-reverse`}>
      {iconsUrl.slice(0, nrLimitIcons).map((url, index) => (
        <IconCircle url={url} key={index}/>
      ))}
      {hasMoreIconsLimit && (
        <div className="w-8 h-8 border-2 border-white rounded-full bg-violet-500 text-white text-center shadow-md">
          +{nrLeftIcons}
        </div>
      )}
    </div>
  );
}
