import Link from 'next/link'

export const NavbarHome = () => {
  return (
    <nav className="bg-dark-100 border border-gray-200 rounded-lg p-1 block">
        <Link href={'/'} className="bg-primary rounded-[4px] shadow border border-primary py-[6px] px-3 inline-block">Inicio</Link>
        <Link href={'/'} className="text-gray-100 hover:bg-gray-200 rounded-[4px] py-[6px] px-3 inline-block">Amigos Simon</Link>
        <Link href={'/'} className="text-gray-100 hover:bg-gray-200 rounded-[4px] py-[6px] px-3 inline-block">Simon te presta</Link>
        <Link href={'/'} className="text-gray-100 hover:bg-gray-200 rounded-[4px] py-[6px] px-3 inline-block">Simon te cuida</Link>
        <Link href={'/'} className="text-gray-100 hover:bg-gray-200 rounded-[4px] py-[6px] px-3 inline-block">Simon te premia</Link>
        <Link href={'/'} className="text-gray-100 hover:bg-gray-200 rounded-[4px] py-[6px] px-3 inline-block">Simon te cuenta</Link>
    </nav>
  )
}