import { IoDocumentOutline } from "react-icons/io5"

interface Props {
    title: string;
    description: string;
}

export const InfoOptionYourVehicles = ({ title, description }: Props) => {
  return (
    <div className="flex grow">
        <div className="bg-dark-200 rounded-lg w-12 h-12 text-white flex items-center justify-center mr-4">
            <IoDocumentOutline size={20}/>
        </div>
        <div className="grow flex flex-col justify-end">
            <p className="text-gray-100 text-sm">{ title }</p>
            <p className="text-base">{ description }</p>
        </div>
    </div>
  )
}