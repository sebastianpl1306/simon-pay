
interface Props {
    children: React.ReactNode;
    className?: string;
}

export const ContentCard = ({ children, className }: Props) => {
  return (
    <section className={`${className} bg-dark-100 border border-gray-200 rounded-lg p-5`}>
        {children}
    </section>
  )
}