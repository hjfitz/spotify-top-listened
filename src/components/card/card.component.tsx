
export interface CardProps {
		children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
			{children}
		</div>
);
