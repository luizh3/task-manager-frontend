
export default function Tr({children, className}){
    return <tr className={`h-16 px-6 py-4 whitespace-nowrap text-sm ${className}`}>{children}</tr>
}