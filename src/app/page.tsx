import { ButtonPrimary, ContainerYourVehicles, ContentCard, HeaderHome } from "@/components";

export default function Home() {
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
        <div className="grid grid-cols-12 grid-rows-12 gap-4 my-8">
          <ContainerYourVehicles/>
          <ContentCard className="col-span-3 row-span-2 text-end">
            <p className="font-semibold text-base">Tu saldo disponible</p>
            <p className="font-semibold text-6xl text-primary">$50.000</p>
          </ContentCard>
          <ContentCard className="col-span-3 row-span-10">
            <p className="font-semibold text-2xl">Movimientos vehículos</p>
          </ContentCard>
          <ContentCard className="col-span-3 row-span-6">
            <p className="font-semibold text-2xl">Tu red Simon</p>
          </ContentCard>
          <ContentCard className="col-span-6 row-span-6">
            <p className="font-semibold text-2xl">Calcula tu viaje</p>
          </ContentCard>
        </div>
      </main>
    </>
  );
}
