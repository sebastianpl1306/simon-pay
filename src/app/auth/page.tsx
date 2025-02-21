import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main>
        <section className="w-full h-[10vh] flex items-center justify-center">
            <Image src={'/logo.svg'} width={160} height={25} alt="logo"/>
        </section>
        <section className="w-full h-[80vh] md:w-3/4 bg-white m-auto rounded-2xl shadow grid grid-cols-2 p-4">
            <div>
                <Image src={'/peajes.jpg'} width={1000} height={1000} alt="logo" className="h-full object-fill rounded-2xl"/>
            </div>
            <div className="">
                <div className="w-full h-full md:w-[60%] m-auto flex flex-col justify-around items-center">
                    <div></div>
                    <div>
                        <h1 className="text-5xl text-center font-extrabold mb-8">Iniciar Sesión</h1>
                        <p className="text-center text-xl">Bienvenido, digita tus credenciales para acceder a la plataforma.</p>
                        <div className="my-4 w-full">
                            <label htmlFor="user" className="font-semibold">Usuario</label>
                            <input type="text" className="w-full border border-slate-300 shadow rounded-lg py-2 px-8"/>
                        </div>
                        <div className="my-4 w-full">
                            <label htmlFor="user" className="font-semibold">Contraseña</label>
                            <input type="text" className="w-full border border-slate-300 shadow rounded-lg py-2 px-8"/>
                        </div>
                        <Link href={'/home'} className="w-full bg-primary rounded-lg py-2 font-semibold block text-center">Iniciar Sesión</Link>
                    </div>
                    <p className="text-xs text-gray-100">Copyright © Simon Movilidad 2024 | Designed & Developed by El Garaje</p>
                </div>
            </div>
        </section>
    </main>
  );
}