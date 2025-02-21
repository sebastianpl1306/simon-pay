import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

export const VehicleMovementsCard = () => {
  return (
    <div className="bg-dark-200 text-white p-4 rounded-lg flex items-center relative w-full shadow-md my-2">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
        <div className="ml-3 flex-1">
            <p className="text-sm">
                <span className="text-gray-100">Parqueadero</span>
                <span className="text-primary font-semibold"> Exitosa</span>
            </p>
            <p className="text-white text-sm truncate">
                Cra 71D No. 6-90, Plaza de las...
            </p>
            <p className="text-white text-xs">12/11/2024 - 10:00am</p>
        </div>

        <IoChevronForwardOutline className="w-4 h-4 text-gray-400"/>
    </div>
  )
}