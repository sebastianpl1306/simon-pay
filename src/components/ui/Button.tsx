interface Props {
    children: React.ReactNode,
    className?: string;
}

export const Button = ({ children, className }: Props) => {
  return (
    <button className={`${className} bg-dark-100 border border-gray-200 rounded-lg w-12 h-12 text-white flex items-center justify-center`}>
        {children}
    </button>
  )
}