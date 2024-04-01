
export interface CardHeaderProps {
		children: React.ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => (
		<div className="space-y-1.5 p-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
				{children}
		</div>
);
