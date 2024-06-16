export default function OptionsCard({ children, className }) {
  return (
    <div
      className={`bg-gray-200 w-full h-fit p-2 rounded space-y-2 ${className}`}
    >
      {children}
    </div>
  );
}
