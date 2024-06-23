export default function Td({children, className}) {
    return <td className={`px-6 py-3 text-start ${className}`}>{children}</td>
}