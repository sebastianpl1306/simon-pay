import { HeaderHome } from "@/components";

export default function Home() {
  return (
    <>
      <HeaderHome/>
      <main className="w-full md:w-4/5 m-auto text-white">
        <div className="flex justify-between items-end mt-4">
          <div>
            <h1 className="text-5xl font-semibold">Centro de Control</h1>
            <p className="text-sm font-normal">Esto es lo que tenemos para ti el día de hoy.</p>
          </div>
          <button className="bg-primary rounded-lg py-2 px-8 font-semibold text-black">Recargar Saldo</button>
        </div>
      </main>
    </>
  );
}
