export interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="space-y-1.5 p-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      {children}
    </div>
  </div>
)
