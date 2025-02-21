interface Props {
    title: string;
    icon: React.ReactNode;
    placeholder: string;
}

export const Input = ({ icon, title, placeholder }: Props) => {
  return (
    <div className="flex flex-col">
        <label className="text-gray-100 mb-1">{title}</label>
        <div className="flex items-center border border-gray-100 rounded-full px-4 py-2 w-full">
            {icon}
            <input
                type="text"
                placeholder={placeholder}
                className="bg-transparent outline-none text-white ml-2 w-full"
            />
        </div>
    </div>
  )
}