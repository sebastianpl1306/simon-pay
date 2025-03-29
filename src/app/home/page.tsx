import { ButtonPrimary, ContainerYourVehicles, ContentCard, HeaderHome, Input, OptionYourRed, VehicleMovementsCard } from "@/components";
import { IoMapOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <>
        <HeaderHome/>
        <main className="w-full md:w-4/5 m-auto text-white">
        <div className="flex justify-between items-end my-4">
            <div>
            <h1 className="text-5xl font-semibold">Centro de Control</h1>
            <p className="text-sm font-normal">Esto es lo que tenemos para ti el día de hoy.</p>
            </div>
            <ButtonPrimary>Recargar Saldo</ButtonPrimary>
        </div>
        <div className="grid grid-cols-12 h-screen grid-rows-12 gap-4 my-8">
            <ContainerYourVehicles/>
            <ContentCard className="col-span-3 row-span-2 text-end">
            <p className="font-semibold text-base">Tu saldo disponible</p>
            <p className="font-semibold text-6xl text-primary">$50.000</p>
            </ContentCard>
            <ContentCard className="col-span-3 row-span-10">
            <p className="font-semibold text-2xl mb-4">Movimientos vehículos</p>
            <div className="overflow-y-scroll h-[90%]">
                <p className="text-gray-100 text-sm">Hoy</p>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
                <p className="text-gray-100 text-sm">Ayer</p>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
                <VehicleMovementsCard/>
            </div>
            </ContentCard>
            <ContentCard className="col-span-3 row-span-5">
                <p className="font-semibold text-2xl mb-4">Tu red Simon</p>
                <OptionYourRed/>
                <hr className="border border-dark-200 my-2"/>
                <OptionYourRed/>
                <hr className="border border-dark-200 my-2"/>
                <OptionYourRed/>
                <hr className="border border-dark-200 my-2"/>
            </ContentCard>
            <ContentCard className="col-span-6 row-span-5">
            <p className="font-semibold text-2xl mb-4">Calcula tu viaje</p>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-2">
                <Input icon={(<IoMapOutline className="w-5 h-5 text-gray-100"/>)} title="Inicio" placeholder="Ingrese su destino"/>
                </div>
                <div className="col-span-2">
                <Input icon={(<IoMapOutline className="w-5 h-5 text-gray-100"/>)} title="Destino" placeholder="Ingrese su destino"/>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-1">
                <ButtonPrimary>Ruta Sugerida</ButtonPrimary>
                </div>
                <div className="col-span-1">
                <ButtonPrimary>Calcular</ButtonPrimary>
                </div>
            </div>
            </ContentCard>
        </div>
        </main>
    </>
  );
}