'use client'

import { useState } from "react";

interface Props {
    isActive: boolean;
    name: string;
    tag: string;
}

export const OptionYourVehicles = ({isActive, name, tag}: Props) => {
  const [state, setState] = useState(isActive);

  const handleChange = () => {
    setState(!state);
  }

  return (
    <div className={`${state ? 'border-primary' : 'border-gray-100'} w-full h-14 bg-gray-300 flex justify-between items-center rounded-lg p-4 border-l-4 my-2`}>
        <div className="flex justify-between items-center">
            <p className={`${state ? 'text-primary' : 'text-gray-100'} text-2xl font-semibold`}>ABC 123</p>
            <span className={`${state ? 'text-primary' : 'text-gray-100'} bg-dark-200 block ml-4 shadow py-1 px-2 rounded-[4px] text-xs`}>{tag}</span>
        </div>
        <div>
            <input
                type="checkbox"
                className="peer hidden"
                id={name}
                onChange={handleChange}
            />
            <label
                htmlFor={name}
                className="block w-6 h-6 border border-gray-400 rounded-full cursor-pointer peer-checked:bg-teal-400 peer-checked:border-transparent transition-all"
            />
        </div>
    </div>
  )
}