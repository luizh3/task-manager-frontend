export default function Thead({children}) {
    return (
        <thead className="bg-white">
            <tr className="h-16">
                {children}
            </tr>
        </thead>
    )
}