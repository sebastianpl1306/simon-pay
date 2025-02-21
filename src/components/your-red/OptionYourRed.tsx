import { IoCarOutline, IoLogoUsd } from 'react-icons/io5'

export const OptionYourRed = () => {
  return (
    <div className='flex items-center'>
        <div className="bg-gray-400 rounded-lg w-14 h-14 text-white flex items-center justify-center mr-4">
            <IoCarOutline size={25}/>
        </div>
        <div className='flex grow justify-between items-center'>
            <div>
                <p className='text-base font-light'>Placa</p>
                <p className='text-xl font-semibold'>UUX 987</p>
            </div>
            <div className="bg-primary text-black rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                <IoLogoUsd size={25}/>
            </div>
        </div>
    </div>
  )
}