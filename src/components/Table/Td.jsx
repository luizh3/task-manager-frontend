export default function Td({ children, className }) {
  return (
    <td
      className={`px-6 py-3 text-start font-medium text-gray-600 ${className}`}
    >
      {children}
    </td>
  );
}
