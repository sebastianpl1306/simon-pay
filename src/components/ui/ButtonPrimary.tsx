interface Props {
    children: React.ReactNode,
    className?: string;
}

export const ButtonPrimary = ({ children, className }: Props) => {
  return (
    <button className={`${className} bg-primary w-40 rounded-lg py-2 font-semibold text-black`}>{children}</button>
  )
}