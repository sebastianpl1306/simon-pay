import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { InfoOptionYourVehicles } from "./InfoOptionYourVehicles"

export const InfoContainerYourVehicles = () => {
  return (
    <div className="col-span-12 my-4 flex justify-between">
        <div className="grid grid-cols-4">
            <div className="flex">
            <InfoOptionYourVehicles title="Placa" description="ABC 123"/>
            <span className="border-r border-dark-200 mx-4"/>
            </div>
            <div className="flex">
            <InfoOptionYourVehicles title="Marca" description="CHEVROLET"/>
            <span className="border-r border-dark-200 mx-4"/>
            </div>
            <div className="flex">
            <InfoOptionYourVehicles title="Modelo" description="2020"/>
            <span className="border-r border-dark-200 mx-4"/>
            </div>
            <div className="flex">
            <InfoOptionYourVehicles title="Linea" description="SPARK GT ACTIVE"/>
            </div>
        </div>
        <div>
            <div className="flex grow">
                <div className="bg-dark-200 rounded-lg w-12 h-12 text-white flex items-center justify-center mr-4">
                    <IoCheckmarkCircleOutline size={20} className="text-primary"/>
                </div>
                <div className="grow flex flex-col justify-end">
                    <p className="text-gray-100 text-sm">Estado</p>
                    <p className="text-base text-primary">ACTIVO</p>
                </div>
            </div>
        </div>
    </div>
  )
}