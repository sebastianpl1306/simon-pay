import { OptionYourVehicles } from './OptionYourVehicles'
import { ButtonPrimary } from '../ui'

export const SelectYourVehicles = () => {

  return (
    <div className="col-span-4 bg-dark-200 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
            <p className="font-semibold text-2xl">Tus vehículos</p>
            <p className="font-semibold text-2xl">3</p>
        </div>
        <OptionYourVehicles name='option1' tag='ACTIVO' isActive/>
        <OptionYourVehicles name='option2' tag='INACTIVO' isActive={false}/>
        <OptionYourVehicles name='option3' tag='SIN TAG' isActive={false}/>
        <ButtonPrimary>Agregar</ButtonPrimary>
    </div>
  )
}