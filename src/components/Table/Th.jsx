export default function Th({ children, className }) {
  return (
    <th
      scope="col"
      className={`px-6 py-3 text-start text-medium text-gray-600 ${className}`}
    >
      {children}
    </th>
  );
}
