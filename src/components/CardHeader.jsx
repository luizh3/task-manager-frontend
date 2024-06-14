export default function CardHeader({ children, title }) {
  return (
    <div className="bg-gray-200 border border-gray-100 h-fit w-full rounded p-2 space-y-4">
      <header>
        <label className="font-medium text-gray-600">{title}</label>
      </header>
      {children}
    </div>
  );
}
