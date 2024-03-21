
export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen pt-24 pr-3 pl-3 bg-gradient-to-r from-neutral-50 to-neutral-100">
            {children}
        </div>
    )
}