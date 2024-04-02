interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className="btn inline hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-900 px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </button>
)
