export interface CardProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Card = ({ children, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gray-900 border-gray-800 cursor-pointer hover:bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-gray-200"
  >
    <div className="space-y-1.5 p-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      {children}
    </div>
  </div>
)
